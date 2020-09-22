import React from 'react';

import Directory from './Directory';
import { StyledHome } from './styles';
import Header from './Header';
import useAnimation from '../../../hooks/useAnimation';

const Home = () => {

  useAnimation('HOME');

  return (
    <>
      <Header />
      <StyledHome>
        <Directory />
      </StyledHome>
    </>
  );
}

export default Home;