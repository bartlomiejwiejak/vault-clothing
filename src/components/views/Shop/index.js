import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from './CollectionOverview';
import Category from './Category';
import { setCollections } from '../../../redux/shop/actions';
import { selectShopCollectionsForPreview } from '../../../redux/shop/selectors';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../../firebase/firebaseUtils';
import Spinner from '../../layout/Spinner';
import { convertCollectionsSnapshotToMap } from '../../../firebase/firebaseUtils';

const Shop = ({ match, setCollections, collections }) => {
  useEffect(() => {
    const collectionsRef = firestore.collection('collections')
    collectionsRef.get().then(async snapshot => {
      const collections = await convertCollectionsSnapshotToMap(snapshot)
      setCollections(collections)
    })
  }, [setCollections])
  return collections.length !== 0 ? (
    <div>
      <Route path={`${match.path}`} exact component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} exact component={Category} />
    </div>
  ) : <Spinner />
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview,
})

const mapDispatchToProps = dispatch => ({
  setCollections: (collections) => dispatch(setCollections(collections))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);