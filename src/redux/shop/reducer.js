import actionTypes from './actionTypes';

const INITIAL_STATE = {
  collections: {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (actionTypes.SET_COLLECTIONS):
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default reducer;