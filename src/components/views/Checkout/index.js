import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeButton from './StripeButton';
import CheckoutItem from './Item';
import useAnimation from '../../../hooks/useAnimation';
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

  return (
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
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);