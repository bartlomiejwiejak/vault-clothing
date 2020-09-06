import React from 'react';

import './styles.scss';

export default ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
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