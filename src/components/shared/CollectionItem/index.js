import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import { addItem } from '../../../redux/cart/actions';
import { StyledCollectionItem } from './styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <StyledCollectionItem>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <footer>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </footer>
      <Button onClick={() => addItem(item)} inverted>Add to cart</Button>
    </StyledCollectionItem>
  );
}

const mapDispatchToProps = dispatch => (
  {
    addItem: item => dispatch(addItem(item))
  }
)

export default connect(null, mapDispatchToProps)(CollectionItem);