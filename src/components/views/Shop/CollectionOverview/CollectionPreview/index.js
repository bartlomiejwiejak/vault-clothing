import React from 'react';
import { useLocation } from 'react-router-dom';

import CollectionItem from '../../../../shared/CollectionItem';
import { StyledCollectionPreview } from './styles';
import ButtonArrow from '../../../../shared/ButtonArrow';

const CollectionPreview = ({ title, items, all }) => {
  const location = useLocation();

  let showItems = items.filter((item, id) => id < 4);
  if (all) {
    showItems = items;
  }

  return (
    <StyledCollectionPreview id='preview'>
      <h1 className='title'><span className='text'>{title}</span><span className='line' /></h1>
      <div className='preview'>
        {showItems.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      <div style={all ? { visibility: 'hidden' } : {}} className='button-container'><ButtonArrow to={location.pathname + '/' + title.toLowerCase()}>See More Cases</ButtonArrow></div>
    </StyledCollectionPreview>
  )
}

export default CollectionPreview;