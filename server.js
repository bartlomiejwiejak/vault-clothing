const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== "production") require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}

app.post('/payment', (req, res) => {
  console.log(req.body)
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (error, response) => {
    if (error) {
      res.status(500).send({ error: error })
    } else {
      res.status(200).send({ success: response })
    }
  })
})

app.listen(port, error => {
  if (error) throw error;
})