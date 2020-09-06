import React from 'react';

import './styles.scss';

export default ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}