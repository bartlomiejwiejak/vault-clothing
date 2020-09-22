import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollectionsForPreview } from '../../../../redux/shop/selectors';
import CollectionPreview from './CollectionPreview';
import { StyledCollectionOverview } from './styles';
import GoToAbout from '../../../shared/GoToAbout';
import useAnimation from '../../../../hooks/useAnimation';

const CollectionsOverview = ({ collections }) => {

  useAnimation('SHOP')

  return (
    <StyledCollectionOverview>
      {collections.map(({ title, items, id }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
      <GoToAbout />
    </StyledCollectionOverview>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);