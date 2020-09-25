import React from 'react';

import useAnimation from '../../../hooks/useAnimation';
import { StyledAbout, StyledHeader } from './styles';

const About = () => {
  useAnimation('ABOUT');

  return <StyledAbout>
    <StyledHeader>
      <img alt='' />
      <div className='lines-box'>
        <h1>Born out of a Passion</h1>
        <h2>Transforming shopping into an experience</h2>
        <h2>with vision for a better outlook</h2>
      </div>
    </StyledHeader>
  </StyledAbout>
}

export default About;