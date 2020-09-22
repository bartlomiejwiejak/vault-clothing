import React from 'react'

import { StyledHeader } from './styles';
import ButtonArrow from '../../../shared/ButtonArrow';

const Header = () => {
  return (
    <StyledHeader>
      <span>However You Fit, Vault Clothing Fits You.</span>
      <span>Built on Service, Focused on Style.</span>
      <ButtonArrow to='/shop'>Start Shopping Now</ButtonArrow>
    </StyledHeader>
  )
}

export default Header;