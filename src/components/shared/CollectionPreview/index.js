import React from 'react'

import CollectionItem from '../CollectionItem';
import './styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, id) => id < 4).map(({ id, ...props }) => (
          <CollectionItem key={id} {...props} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview;