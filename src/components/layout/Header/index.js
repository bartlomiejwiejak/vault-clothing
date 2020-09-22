import React, { useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import { selectCurrentUser } from '../../../redux/user/selectors';
import { selectCartHidden } from '../../../redux/cart/selectors';
import { selectAnimating } from '../../../redux/routing/selectors';
import { createStructuredSelector } from 'reselect';
import { StyledHeader, StyledLogo, StyledBurger, StyledDropdown, StyledMenu, StyledContact } from './styles';
import { signOutStart } from '../../../redux/user/actions';
import MenuButton from '../../shared/MenuButton';
import Cart from './Cart';
import Link from '../../shared/Link';

const Header = ({ currentUser, animating }) => {
  const dropdownRef = useRef(null);
  const isDropdownOpen = useRef(false);
  const isAnimating = useRef(false)
  const burgerRef = useRef(null);
  const dropdownContentRef = useRef(null);

  gsap.registerPlugin(CustomEase);
  CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.598,0.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1')

  const hideDropdown = useCallback(() => {
    isAnimating.current = true;
    gsap.set('body', { overflow: 'hidden' })
    gsap.to(dropdownContentRef.current, .8, { ease: 'custom', y: '100%' })
    gsap.to(burgerRef.current.querySelector(':nth-child(1)'), .5, { rotate: 0, top: '2rem', ease: 'custom', delay: .3 })
    gsap.to(burgerRef.current.querySelector(':nth-child(2)'), .5, { rotate: 0, bottom: '2rem', ease: 'custom', delay: .3 })
    gsap.to('#content', .8, { ease: 'custom', y: 0 })
    gsap.to(dropdownRef.current, .8, {
      ease: 'custom', y: '-100%', onComplete: () => {
        isAnimating.current = false;
        gsap.set('body', { overflow: 'auto' })
        gsap.set('#content', { pointerEvents: 'auto' })
      }
    })
    isDropdownOpen.current = false;
  }, [])
  const showDropdown = useCallback(() => {
    isAnimating.current = true;
    gsap.set('body', { overflow: 'hidden' })
    gsap.to(dropdownContentRef.current, .8, { ease: 'custom', y: 0 })
    gsap.set('#content', { pointerEvents: 'none' })
    gsap.to('#content', .8, { ease: 'custom', y: '50vh' })
    gsap.to(burgerRef.current.querySelector(':nth-child(1)'), .5, { rotate: '45deg', top: '2.4rem', ease: 'custom', delay: .3 })
    gsap.to(burgerRef.current.querySelector(':nth-child(2)'), .5, { rotate: '-45deg', bottom: '2.4rem', ease: 'custom', delay: .3 })
    gsap.to(dropdownRef.current, .8, {
      ease: 'custom', y: 0, onComplete: () => {
        isAnimating.current = false;
      }
    })
    isDropdownOpen.current = true;
  }, [])

  const dropdownHandler = () => {
    if (isAnimating.current) return;
    if (isDropdownOpen.current) {
      hideDropdown();
    } else {
      showDropdown();
    }
  }

  useEffect(() => {
    if (animating) {
      hideDropdown();
    }
  }, [animating, hideDropdown])

  return (
    <>
      <StyledDropdown ref={dropdownRef}>
        <div ref={dropdownContentRef} className='content'>
          <StyledMenu>
            <span>Menu</span>
            <li><MenuButton color='var(--color-black)' bold={true}>Shop</MenuButton></li>
            <li><MenuButton color='var(--color-black)' bold={true}>About</MenuButton></li>
            <li>{currentUser ? <MenuButton color='var(--color-black)' bold={true}>Sign Out</MenuButton> : <MenuButton color='var(--color-black)' bold={true}>Sign Out</MenuButton>}</li>
          </StyledMenu>
          <StyledContact>
            <span>Contact</span>
            <li>
              <span>Email</span>
              <MenuButton color='var(--color-black)' bold={false}>Get in touch</MenuButton>
              <MenuButton color='var(--color-black)' bold={false}>hello@vaultclothing.com</MenuButton>
            </li>
            <li>
              <span>Phone</span>
              <MenuButton color='var(--color-black)' bold={false}>+1 202 555 0145</MenuButton>
            </li>
          </StyledContact>
          <Cart />
        </div>
      </StyledDropdown>
      <StyledHeader>
        <StyledLogo id='logo'>
          <Link to='/'>
            <span><span>vault</span></span>
            <span><span>clothing</span></span>
          </Link>
        </StyledLogo>
        <StyledBurger id='burger' ref={burgerRef} onClick={dropdownHandler}>
          <div />
          <div />
        </StyledBurger>
      </StyledHeader>
    </>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  animating: selectAnimating
})
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);