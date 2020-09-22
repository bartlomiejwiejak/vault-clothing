import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../../../redux/shop/selectors';
import useAnimation from '../../../../hooks/useAnimation';
import CollectionPreview from '../CollectionOverview/CollectionPreview';
import { StyledCategory } from './styles';
import GoTo from '../../../shared/GoTo';

const Category = ({ collection }) => {
  const { title, items } = collection;

  useAnimation('SHOP');
  return (
    <StyledCategory>
      <CollectionPreview items={items} title={title} all />
      <GoTo to='/about'>Go To About</GoTo>
    </StyledCategory>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category);