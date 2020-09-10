import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from './CollectionOverview';
import Category from './Category';

const Shop = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} exact component={Category} />
    </div>
  );
}

export default Shop;