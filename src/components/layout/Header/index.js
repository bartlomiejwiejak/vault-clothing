import React from 'react';
import { connect } from 'react-redux';

import CartIcon from '../../shared/CartIcon';
import CartDropdown from '../../shared/CartDropdown';
import { selectCurrentUser } from '../../../redux/user/selectors';
import { selectCartHidden } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledHeader, StyledLogo, StyledOptions, StyledOption } from './styles';
import { signOutStart } from '../../../redux/user/actions';

const Header = ({ currentUser, toggleCartHidden, hidden, signOutStart }) => (
  <StyledHeader>
    <StyledLogo to='/'>
      <div>vault </div>
      <div>clothing</div>
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
          <StyledOption as='div' onClick={signOutStart}>
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
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);