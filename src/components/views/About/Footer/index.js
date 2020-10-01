import React from 'react'

import { StyledFooter } from './styles';
import GoTo from '../../../shared/GoTo';

const Footer = () => {

  const line = <>
    <span>support</span>
    <span>service</span>
    <span>quality</span>
    <span>strategy</span>
    <span>vision</span>
    <span>solutions</span>
    <span>simple</span>
    <span>shopping</span>
  </>

  return (
    <StyledFooter>
      <div className='line line-left'>
        <div>
          {line}
        </div>
        <div>
          {line}
        </div>
      </div>
      <div className='line line-right'>
        <div>
          {line}
        </div>
        <div>
          {line}
        </div>
      </div>
      <div className="contact">
        <div className="mark" />
        <div className="touch">GET IN TOUCH</div>
        <div className="email">hello@vaultclothing.com</div>
      </div>
      <GoTo to='/shop'>Start Shopping Now</GoTo>
    </StyledFooter>
  )
}

export default Footer;