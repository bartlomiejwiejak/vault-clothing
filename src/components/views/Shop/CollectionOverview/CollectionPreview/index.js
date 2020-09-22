import React from 'react'

import CollectionItem from '../../../../shared/CollectionItem';
import { StyledCollectionPreview } from './styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview id='preview'>
      <h1 className='title'><span className='text'>{title}</span><span className='line' /></h1>
      <div className='preview'>
        {items.filter((item, id) => id < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </StyledCollectionPreview>
  )
}

export default CollectionPreview;