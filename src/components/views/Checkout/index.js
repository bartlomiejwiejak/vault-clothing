import React from 'react'

import './styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/selectors';
import { connect } from 'react-redux';
import { selectCartTotal } from '../../../redux/cart/selectors';
import CheckoutItem from './Item';
import StripeButton from './StripeButton';

const Checkout = ({ total, cartItems }) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className='text-warning'>
        *Use the following test credit cart for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - Cvv: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)