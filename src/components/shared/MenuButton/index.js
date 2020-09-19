import React from 'react'

import { StyledMenuButton } from './styles';

const MenuButton = ({ children, size, color, bold }) => {
  return (
    <StyledMenuButton size={size} color={color} bold={bold}>
      {children}
    </StyledMenuButton>
  )
}

export default MenuButton;