import { takeLatest, put, all, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { auth, googleProvider, createUserProfile } from '../../firebase/firebaseUtils';
import { signInSuccess, signInFail } from './actions';

export function* getUserSnapshot(user) {
  try {
    const userRef = yield call(createUserProfile, user)
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (err) {
    yield put(signInFail(err))
  }
}
export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getUserSnapshot(user)
  } catch (err) {
    yield put(signInFail(err))
  }
}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user)
  } catch (err) {
    yield put(signInFail(err))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(actionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}
export function* onEmailSignInStart() {
  yield takeLatest(actionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export default function* () {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}