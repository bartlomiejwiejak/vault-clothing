import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import img from '../../../../assets/favicon-32x32.png';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishibleKey = 'pk_test_51HPpRqBFimewjrhIqQfpEcdRwt8Thsfe6uRbMePnk3qPtgziwKfxCHKQJD5sqRxauiery5l1budZC6yTpLk1NV0500MXofz8E7';
  const onToken = token => {
    axios.post('http://localhost:5000/payment', {
      amount: priceForStripe,
      token: token
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log('Payment error: ', error)
      alert('There is an issue with your payment. Please sure you use the provided credit cart.')
    })
  }
  return <StripeCheckout
    label='Pay Now'
    name='Vault Clothing Ltd.'
    shippingAddress
    billingAddress
    image={img}
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishibleKey}
  />
}

export default StripeButton;