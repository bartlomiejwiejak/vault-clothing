import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../../shared/Button';
import CartItem from './CartItem';
import { selectCartItems } from '../../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledCart } from './styles';

const CartDropdown = ({ cartItems }) => {
  const history = useHistory()
  const goToCheckoutHandle = () => {
    history.push('/checkout')
  }
  return (
    <StyledCart>
      <div className="items">
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            :
            <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <Button onClick={goToCheckoutHandle}>GO TO CHECKOUT</Button>
    </StyledCart>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)