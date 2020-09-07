import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './styles.scss';

const MenuItem = ({ title, imageUrl, size, url }) => {
  const match = useRouteMatch();
  const history = useHistory();
  return (
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${url}`)}>
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

export default MenuItem;