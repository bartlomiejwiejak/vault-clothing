import React from 'react';

import { StyledItem } from './styles';

const Item = ({ title, imageUrl, url }) => {
  return (
    <StyledItem>
      <img
        className='background-image'
        src={imageUrl}
        alt='case img'
        draggable={false}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>Explore & Shop Now</span>
      </div>
    </StyledItem>
  );
}

export default Item;