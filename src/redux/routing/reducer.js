import actionTypes from './actionTypes';

const INITIAL_STATE = {
  animating: false,
  path: '/',
  initialized: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_ANIMATING:
      return {
        ...state,
        animating: action.payload
      }
    case actionTypes.SET_PATH:
      return {
        ...state,
        path: action.payload
      }
    case actionTypes.SET_INITIALIZED:
      return {
        ...state,
        initialized: action.payload
      }
    default: return state;
  }
}

export default reducer;