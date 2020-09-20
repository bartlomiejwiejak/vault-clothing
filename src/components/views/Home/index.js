import React from 'react';

import Directory from './Directory';
import { StyledHome } from './styles';
import Header from './Header';

const Home = () => {
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