import React from 'react'

import './styles.scss';
import Button from '../Button';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown