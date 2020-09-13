import actionTypes from './actionTypes';
export const setCollectionsStart = () => ({
  type: actionTypes.SET_COLLECTIONS_START
})
export const setCollectionsFail = (errMessage) => ({
  type: actionTypes.SET_COLLECTIONS_FAIL,
  payload: errMessage
})
export const setCollectionsSuccess = (collections) => ({
  type: actionTypes.SET_COLLECTIONS_SUCCESS,
  payload: collections
})