import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './styles.scss';
import Button from '../Button';
import CartItem from '../CartItem';
import { selectCartItems } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../../redux/cart/actions';

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  const history = useHistory()
  const goToCheckoutHandle = () => {
    toggleCartHidden()
    history.push('/checkout')
  }
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            :
            <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)