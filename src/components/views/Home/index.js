import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import Directory from './Directory';
import { StyledHome } from './styles';
import Header from './Header';
import { selectAnimating, selectInitialized } from '../../../redux/routing/selectors';
import { setAnimating, setInitialized } from '../../../redux/routing/actions';
import showHeader from '../../../animations/showHeader';

const Home = ({ animating, setAnimating, initialized }) => {

  const isLoadedRef = useRef(false);

  gsap.registerPlugin(CustomEase);
  CustomEase.create('custom', 'M0,0,C0.214,0.041,0.097,0.01,0.24,0.054,0.24,0.054,0.24,0.054,0.24,0.054,0.354,0.074,0.429,0.213,0.526,0.368,0.598,0.482,0.649,0.858,0.79,1,0.922,1,0.974,1,1,1')

  useEffect(() => {
    if (isLoadedRef.current) return;
    let delay = 0;
    isLoadedRef.current = true;
    if (!initialized) {
      showHeader();
      setInitialized(true);
      delay = 1500;
    }
    setTimeout(() => {
      gsap.to('#overlay', 1, { ease: 'custom', y: '100%' })
      gsap.from('#scroll-item', .5, { ease: 'power2.out', delay: .5, y: '100%', scale: .5 })
      gsap.to('#directory i', 1, { bottom: 0, ease: 'power2.out', delay: 1.2 })
      gsap.from('#content', 1, { ease: 'power2.out', scale: '1.6' })
    }, delay)
  }, [initialized])
  return (
    <>
      <Header />
      <StyledHome>
        <Directory />
      </StyledHome>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  animating: selectAnimating,
  initialized: selectInitialized
})

const mapDispatchToProps = dispatch => ({
  setAnimating: (payload) => dispatch(setAnimating(payload)),
  setInitialized: (payload) => dispatch(setInitialized(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);