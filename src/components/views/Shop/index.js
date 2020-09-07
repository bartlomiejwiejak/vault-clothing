import React, { useState } from 'react';

import SHOP_DATA from '../../../data/shop';
import CollectionPreview from '../../shared/CollectionPreview';

const Shop = () => {
  const [data, setData] = useState(SHOP_DATA)
  return (
    <div>
      {data.map(({ id, ...otherProps }) => <CollectionPreview key={id} {...otherProps} />)}
    </div>
  );
}

export default Shop;