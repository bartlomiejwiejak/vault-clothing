import React from 'react'

import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      <span>However You Fit, Vault Clothing Fits You.</span>
      <span>Built on Service, Focused on Style.</span>
      <span className='action'>Start Shopping Now <i className='fas fa-arrow-circle-right'></i></span>
    </StyledHeader>
  )
}

export default Header;
