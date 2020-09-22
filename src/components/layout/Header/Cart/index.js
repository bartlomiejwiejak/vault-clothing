import React from 'react'
import { connect } from 'react-redux';

import Button from '../../../shared/Button';
import CartItem from './CartItem';
import { selectCartItems } from '../../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledCart } from './styles';
import Link from '../../../shared/Link';

const CartDropdown = ({ cartItems }) => {

  return (
    <StyledCart>
      <span>Cart</span>
      <div className="items">
        {
          cartItems.length ?
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            :
            <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      <Button><Link to='/checkout'>GO TO CHECKOUT</Link></Button>
    </StyledCart>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)