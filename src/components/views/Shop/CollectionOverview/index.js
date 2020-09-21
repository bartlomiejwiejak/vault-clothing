import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollectionsForPreview } from '../../../../redux/shop/selectors';
import CollectionPreview from './CollectionPreview';
import { StyledCollectionOverview } from './styles';
import GoToAbout from '../../../shared/GoToAbout';

const CollectionsOverview = ({ collections }) => (
  <StyledCollectionOverview>
    {collections.map(({ title, items, id }) => (
      <CollectionPreview key={id} title={title} items={items} />
    ))}
    <GoToAbout />
  </StyledCollectionOverview>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);