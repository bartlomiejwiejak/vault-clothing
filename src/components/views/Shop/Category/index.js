import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../../../redux/shop/selectors';
import CollectionItem from '../../../shared/CollectionItem';
import './styles.scss';

const Category = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='category'>
      <h2>{title}</h2>
      <div className='items'>
        {items.map(item => <CollectionItem item={item} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Category);