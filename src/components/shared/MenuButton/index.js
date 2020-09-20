import React from 'react'

import { StyledMenuButton } from './styles';

const MenuButton = ({ children, color, bold }) => {
  return (
    <StyledMenuButton color={color} bold={bold}>
      {children}
    </StyledMenuButton>
  )
}

export default MenuButton;