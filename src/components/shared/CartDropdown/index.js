import React from 'react'
import { connect } from 'react-redux';

import './styles.scss';
import Button from '../Button';
import CartItem from '../CartItem';
import { selectCartItems } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)