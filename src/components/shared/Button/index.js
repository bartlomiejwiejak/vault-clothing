import React from 'react'

import { StyledButton } from './styles';

const Button = ({ children, isGoogle, inverted, ...otherProps }) => {
  return (
    <StyledButton isGoogle={isGoogle} inverted={inverted}{...otherProps}>
      {children}
    </StyledButton>
  )
}

export default Button;