import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from './CollectionOverview';
import Category from './Category';
import { setCollections } from '../../../redux/shop/actions';
import { selectShopCollectionsForPreview } from '../../../redux/shop/selectors';
import { createStructuredSelector } from 'reselect';
import Spinner from '../../layout/Spinner';
import { selectIsLoading, selectIsCollectionLoaded } from '../../../redux/shop/selectors';

const Shop = ({ match, setCollections, isLoading, collectionIsLoaded }) => {
  useEffect(() => {
    setCollections()
  }, [setCollections])
  if (!collectionIsLoaded && isLoading === false) return null;

  return isLoading ? <Spinner /> : (
    <div>
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} exact component={Category} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
  isLoading: selectIsLoading,
  collectionIsLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
  setCollections: () => dispatch(setCollections())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);