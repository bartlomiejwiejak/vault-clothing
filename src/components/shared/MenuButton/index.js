import React from 'react'

import { StyledMenuButton } from './styles';

const MenuButton = ({ children, color, bold, onClick }) => {
  return (
    <StyledMenuButton id='button' color={color} bold={bold} onClick={onClick}>
      {children}
    </StyledMenuButton>
  )
}

export default MenuButton;