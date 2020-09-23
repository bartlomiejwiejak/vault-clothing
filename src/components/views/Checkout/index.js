import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import gsap from 'gsap';

import StripeButton from './StripeButton';
import CheckoutItem from './Item';
import useAnimation from '../../../hooks/useAnimation';
import GoTo from '../../shared/GoTo';
import {
  selectCartItems,
  selectCartTotal
} from '../../../redux/cart/selectors';
import {
  StyledCheckout,
  StyledHeader,
  StyledHeaderBlock,
  StyledTotal,
  StyledWarning
} from './styles';

export const CheckoutPage = ({ cartItems, total }) => {

  useAnimation('CHECKOUT');

  let content = (
    <StyledCheckout>
      <StyledHeader>
        <StyledHeaderBlock>
          <span>Product</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Description</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Quantity</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Price</span>
        </StyledHeaderBlock>
        <StyledHeaderBlock>
          <span>Remove</span>
        </StyledHeaderBlock>
      </StyledHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <StyledTotal>TOTAL: ${total}</StyledTotal>
      <StyledWarning>
        *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </StyledWarning>
      <StripeButton price={total} />
    </StyledCheckout>
  )

  if (cartItems.length === 0) {
    content = <GoTo to='/shop'>Your cart is empty. Go back to shopping</GoTo>
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      gsap.set('#go-to', { marginTop: 0, paddingTop: '25rem' })
      gsap.to('#go-to .container', 1, { y: 0 })
    }
  }, [cartItems.length])

  return content;
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);