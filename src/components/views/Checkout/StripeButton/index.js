import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishibleKey = 'pk_test_51HPpRqBFimewjrhIqQfpEcdRwt8Thsfe6uRbMePnk3qPtgziwKfxCHKQJD5sqRxauiery5l1budZC6yTpLk1NV0500MXofz8E7';
  const onToken = token => {
    console.log(token)
    alert("Payment successful")
  }
  return <StripeCheckout
    label='Pay Now'
    name='Shop Clothing Ltd.'
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishibleKey}
  />
}

export default StripeButton;