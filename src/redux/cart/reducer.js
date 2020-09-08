import actionTypes from './actionTypes';

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
        cartItems: [...state.cartItems, action.payload]
      }
    default: return state
  }
}

export default reducer;