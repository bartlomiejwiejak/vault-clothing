import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollectionsForPreview } from '../../../../redux/shop/selectors';
import CollectionPreview from './CollectionPreview';
import { StyledCollectionOverview } from './styles';
import GoTo from '../../../shared/GoTo';
import useAnimation from '../../../../hooks/useAnimation';

const CollectionsOverview = ({ collections }) => {

  useAnimation('SHOP')

  return (
    <StyledCollectionOverview>
      {collections.map(({ title, items, id }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
      <GoTo to='/about'>Go To About</GoTo>
    </StyledCollectionOverview>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);