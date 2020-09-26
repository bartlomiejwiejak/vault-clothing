import React from 'react';

import useAnimation from '../../../hooks/useAnimation';
import { StyledHeader } from './styles';
import SectionHorizontal from './SectionHorizontal';
import Footer from './Footer';

const About = () => {

  useAnimation('ABOUT');

  return <div>
    <StyledHeader id='about-header'>
      <img alt='' />
      <div className='text-box'>
        <h1><div className='wrapper'>Born out of a Passion</div></h1>
        <h2><div className='wrapper'>Transforming shopping into an experience</div></h2>
        <h2><div className='wrapper'>with vision for a better outlook</div></h2>
        <div className='scroll-indicator'>
          <span>Scroll Down</span>
          <i className='fas fa-arrow-circle-down'></i>
        </div>
      </div>
    </StyledHeader>
    <SectionHorizontal />
    <Footer />
  </div>
}

export default About;