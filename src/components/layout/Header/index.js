import React, { useRef } from 'react';
import { connect } from 'react-redux';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import { selectCurrentUser } from '../../../redux/user/selectors';
import { selectCartHidden } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledHeader, StyledLogo, StyledBurger, StyledDropdown, StyledMenu, StyledContact } from './styles';
import { signOutStart } from '../../../redux/user/actions';
import MenuButton from '../../shared/MenuButton';
import Cart from './Cart';

const Header = ({ currentUser }) => {
  const dropdownRef = useRef(null);
  const isDropdownOpen = useRef(false);
  const isAnimating = useRef(false)
  const burgerRef = useRef(null);
  const dropdownContentRef = useRef(null);

  gsap.registerPlugin(CustomEase);
  CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.598,0.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1')

  const dropdownHandler = () => {
    if (isAnimating.current) return;
    if (isDropdownOpen.current) {
      isAnimating.current = true;
      gsap.to(dropdownContentRef.current, 1, { ease: 'custom', y: '100%' })
      gsap.to(burgerRef.current.querySelector(':nth-child(1)'), .7, { rotate: 0, top: '2rem', ease: 'custom', delay: .3 })
      gsap.to(burgerRef.current.querySelector(':nth-child(2)'), .7, { rotate: 0, bottom: '2rem', ease: 'custom', delay: .3 })
      gsap.to('#root > .content', 1, { ease: 'custom', y: 0 })
      gsap.to(dropdownRef.current, 1, {
        ease: 'custom', y: '-100%', onComplete: () => {
          isAnimating.current = false;
          gsap.set('body', { overflow: 'auto' })
          gsap.set('#root > .content', { pointerEvents: 'auto' })
        }
      })
      isDropdownOpen.current = false;
    } else {
      isAnimating.current = true;
      gsap.set('body', { overflow: 'hidden' })
      gsap.to(dropdownContentRef.current, 1, { ease: 'custom', y: 0 })
      gsap.set('#root > .content', { pointerEvents: 'none' })
      gsap.to('#root > .content', 1, { ease: 'custom', y: '50vh' })
      gsap.to(burgerRef.current.querySelector(':nth-child(1)'), .7, { rotate: '45deg', top: '2.4rem', ease: 'custom', delay: .3 })
      gsap.to(burgerRef.current.querySelector(':nth-child(2)'), .7, { rotate: '-45deg', bottom: '2.4rem', ease: 'custom', delay: .3 })
      gsap.to(dropdownRef.current, 1, {
        ease: 'custom', y: 0, onComplete: () => {
          isAnimating.current = false;
        }
      })
      isDropdownOpen.current = true;
    }
  }

  return (
    <>
      <StyledDropdown ref={dropdownRef}>
        <div ref={dropdownContentRef} className='content'>
          <StyledMenu>
            <span>Menu</span>
            <li><MenuButton color='var(--color-black)' size='var(--font-size-xl)' bold={true}>Shop</MenuButton></li>
            <li><MenuButton color='var(--color-black)' size='var(--font-size-xl)' bold={true}>About</MenuButton></li>
            <li>{currentUser ? <MenuButton color='var(--color-black)' size='var(--font-size-xl)' bold={true}>Sign Out</MenuButton> : <MenuButton color='var(--color-black)' size='var(--font-size-xl)' bold={true}>Sign Out</MenuButton>}</li>
          </StyledMenu>
          <StyledContact>
            <span>Contact</span>
            <li>
              <span>Email</span>
              <MenuButton color='var(--color-black)' size='var(--font-size-m)' bold={false}>Get in touch</MenuButton>
              <MenuButton color='var(--color-black)' size='var(--font-size-m)' bold={false}>hello@vaultclothing.com</MenuButton>
            </li>
            <li>
              <span>Phone</span>
              <MenuButton color='var(--color-black)' size='var(--font-size-m)' bold={false}>+1 202 555 0145</MenuButton>
            </li>
          </StyledContact>
          <Cart />
        </div>
      </StyledDropdown>
      <StyledHeader>
        <StyledLogo to='/'>
          <div>vault </div>
          <div>clothing</div>
        </StyledLogo>
        <StyledBurger ref={burgerRef} onClick={dropdownHandler}>
          <div></div>
          <div></div>
        </StyledBurger>
      </StyledHeader>
    </>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);