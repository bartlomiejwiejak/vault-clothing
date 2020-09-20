import React from 'react';

import { StyledItem } from './styles';

const Item = ({ title, imageUrl, url }) => {
  return (
    <StyledItem id='scroll-item'>
      <img
        className='background-image'
        src={imageUrl}
        alt='case img'
        draggable={false}
      />
      <div className='content'>
        <div className='title'>{title.charAt(0).toUpperCase() + title.slice(1)}</div>
        <span className='subtitle'>Explore & Shop Now</span>
      </div>
    </StyledItem>
  );
}

export default Item;