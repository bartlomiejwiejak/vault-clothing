import React from 'react'

import CollectionItem from '../../../../shared/CollectionItem';
import { StyledCollectionPreview } from './styles';

const CollectionPreview = ({ title, items }) => {
  return (
    <StyledCollectionPreview>
      <h1 className='title'>{title}<span /></h1>
      <div className='preview'>
        {items.filter((item, id) => id < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </StyledCollectionPreview>
  )
}

export default CollectionPreview;