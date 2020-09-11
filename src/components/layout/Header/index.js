import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../../assets/crown.svg';
import { auth } from '../../../firebase/firebaseUtils';
import CartIcon from '../../shared/CartIcon';
import CartDropdown from '../../shared/CartDropdown';
import { selectCurrentUser } from '../../../redux/user/selectors';
import { selectCartHidden } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledHeader, StyledLogo, StyledOptions, StyledOption } from './styles';

const Header = ({ currentUser, toggleCartHidden, hidden }) => (
  <StyledHeader>
    <StyledLogo to='/'>
      <Logo className='logo' />
    </StyledLogo>
    <StyledOptions>
      <StyledOption to='/shop'>
        SHOP
      </StyledOption>
      <StyledOption to='/contact'>
        CONTACT
      </StyledOption>
      {
        currentUser ?
          <StyledOption as='div' onClick={() => auth.signOut()}>
            SIGN OUT
        </StyledOption>
          :
          <StyledOption to='/auth'>
            SIGN IN
      </StyledOption>
      }
      <CartIcon onClick={toggleCartHidden} />
    </StyledOptions>
    {hidden ? null : <CartDropdown />}
  </StyledHeader>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);