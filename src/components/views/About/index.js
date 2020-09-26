import React from 'react';

import useAnimation from '../../../hooks/useAnimation';
import { StyledAbout, StyledHeader } from './styles';
import SectionHorizontal from './SectionHorizontal';

const About = () => {
  useAnimation('ABOUT');

  return <StyledAbout>
    <StyledHeader>
      <img alt='' />
      <div className='text-box'>
        <h1>Born out of a Passion</h1>
        <h2>Transforming shopping into an experience</h2>
        <h2>with vision for a better outlook</h2>
        <div className='scroll-indicator'>
          <span>Scroll Down</span>
          <i className='fas fa-arrow-circle-down'></i>
        </div>
      </div>
    </StyledHeader>
    <SectionHorizontal />
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }} />
  </StyledAbout>
}

export default About;