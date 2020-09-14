import actionTypes from './actionTypes';

import { addItemToCart, removeItemFromCart } from './utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case actionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case (actionTypes.CLEAR_CART):
      return {
        ...state,
        cartItems: []
      }
    default: return state
  }
}

export default reducer;