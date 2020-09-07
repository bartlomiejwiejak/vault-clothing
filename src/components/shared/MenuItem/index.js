import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.scss';

export default ({ title, imageUrl, size, url }) => {
  const history = useHistory();

  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(`/${url}`)}>
      <img
        className='background-image'
        src={imageUrl}
        alt='case img'
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}