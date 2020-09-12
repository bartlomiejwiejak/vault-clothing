import actionTypes from './actionTypes';

const INITIAL_STATE = {
  collections: {},
  isLoading: false,
  errorMessage: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (actionTypes.SET_COLLECTIONS_START):
      return {
        ...state,
        isLoading: true
      }
    case (actionTypes.SET_COLLECTIONS_SUCCESS):
      return {
        ...state,
        isLoading: false,
        collections: action.payload
      }
    case (actionTypes.SET_COLLECTIONS_FAIL):
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default reducer;