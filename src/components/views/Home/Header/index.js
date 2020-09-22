import React from 'react'

import { StyledHeader } from './styles';
import Link from '../../../shared/Link';

const Header = () => {
  return (
    <StyledHeader>
      <span>However You Fit, Vault Clothing Fits You.</span>
      <span>Built on Service, Focused on Style.</span>
      <span className='action'><Link to='/shop'>Start Shopping Now <i className='fas fa-arrow-circle-right'></i></Link></span>
    </StyledHeader>
  )
}

export default Header;