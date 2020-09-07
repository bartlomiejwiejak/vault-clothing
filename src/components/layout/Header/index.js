import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/crown.svg';
import './styles.scss';

const Header = () => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </header>
);

export default Header;