import React from 'react'

import { StyledGoTo } from './styles';
import Link from '../Link';

const GoTo = ({ children, to }) => {
  return (
    <StyledGoTo id='go-to'>
      <Link to={to}>
        <div className='container'>
          <span>{children}<i className='fas fa-arrow-circle-right'></i></span>
        </div>
      </Link>
    </StyledGoTo>
  )
}

export default GoTo;
