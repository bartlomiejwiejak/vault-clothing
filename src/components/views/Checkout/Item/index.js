import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../../../redux/cart/actions';

import {
  StyledCheckoutItem,
  StyledImageContainer,
  StyledText,
  StyledQuantity,
  StyledRemoveButton
} from './styles';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <StyledCheckoutItem>
      <StyledImageContainer>
        <img src={imageUrl} alt='item' />
      </StyledImageContainer>
      <StyledText>{name}</StyledText>
      <StyledQuantity>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </StyledQuantity>
      <StyledText>${price * quantity}</StyledText>
      <StyledRemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </StyledRemoveButton>
    </StyledCheckoutItem>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);