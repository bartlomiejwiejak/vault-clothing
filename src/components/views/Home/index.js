import React from 'react';

import './styles.scss';
import Directory from '../../shared/Directory';

const Home = () => {
  return (
    <div className='homepage'>
      <h1>Home page</h1>
      <Directory />
    </div>
  );
}

export default Home;