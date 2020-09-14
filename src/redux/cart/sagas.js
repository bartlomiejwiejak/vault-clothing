import { all, put, takeLatest, call } from 'redux-saga/effects';
import userActionTypes from '../user/actionTypes';
import { clearCart } from './actions';

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export default function* () {
  yield all([call(onSignOutSuccess)])
}