import { takeLatest, put, all, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { auth, googleProvider, createUserProfile } from '../../firebase/firebaseUtils';
import { googleSignInSuccess, googleSignInFail } from './actions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfile, user)
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (err) {
    put(googleSignInFail(err))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export default function* () {
  yield all([call(onGoogleSignInStart)])
}