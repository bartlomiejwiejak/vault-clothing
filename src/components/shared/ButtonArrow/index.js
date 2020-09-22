import React from 'react';

import { StyledButtonArrow } from './styles';
import Link from '../Link';

const ButtonArrow = ({ children, to }) => {
  return (
    <StyledButtonArrow id='button-arrow'>
      <Link to={to}>
        {children}
        <i className='fas fa-arrow-circle-right'></i>
      </Link>
    </StyledButtonArrow>
  )
}

export default ButtonArrow;