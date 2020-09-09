import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';
import Button from '../Button';
import { addItem } from '../../../redux/cart/actions'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>Add to cart</Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => (
  {
    addItem: item => dispatch(addItem(item))
  }
)

export default connect(null, mapDispatchToProps)(CollectionItem);