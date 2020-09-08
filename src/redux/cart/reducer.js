import actionTypes from './actionTypes';

const INITIAL_STATE = {
  hidden: true
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default: return state
  }
}

export default reducer;