import actionTypes from './actionTypes';

export const toggleCartHidden = () => {
  return {
    type: actionTypes.TOGGLE_CART_HIDDEN
  }
}
export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  }
}