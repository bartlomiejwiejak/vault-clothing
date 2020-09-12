import actionTypes from './actionTypes';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

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
export const setCollections = () => {
  return dispatch => {
    dispatch(setCollectionsStart())
    const collectionsRef = firestore.collection('collections')
    collectionsRef.get().then(async snapshot => {
      const collections = await convertCollectionsSnapshotToMap(snapshot)
      dispatch(setCollectionsSuccess(collections))
    })
      .catch(err => {
        dispatch(setCollectionsFail(err.message))
      }
      )
  }
}