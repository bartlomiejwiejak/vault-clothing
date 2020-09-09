import React from 'react'
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../..//../assets/shopping-bag.svg';
import './styles.scss';
import { toggleCartHidden } from '../../../redux/cart/actions';
import { selectCartItemsCount } from '../../../redux/cart/selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div onClick={toggleCartHidden} className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);