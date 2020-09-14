import { takeLatest, put, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebaseUtils';
import { setCollectionsSuccess, setCollectionsFail } from './actions';

export function* setCollections() {
  const collectionsRef = firestore.collection('collections')
  try {
    const snapshot = yield collectionsRef.get()
    const collections = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(setCollectionsSuccess(collections))
  } catch (err) {
    yield put(setCollectionsFail(err.message))
  }
}
export function* onSetCollectionsStart() {
  yield takeLatest(actionTypes.SET_COLLECTIONS_START, setCollections)
}