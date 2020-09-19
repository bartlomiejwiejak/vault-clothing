import React from 'react'

import { StyledCartItem } from './styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <StyledCartItem>
      <div className='image-container'><img src={imageUrl} alt='item' /></div>
      <div className='details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </StyledCartItem>
  )
}

export default CartItem