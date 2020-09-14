import { takeLatest, put, all, call } from 'redux-saga/effects';

import actionTypes from './actionTypes';
import { auth, googleProvider, createUserProfile, getCurrentUser } from '../../firebase/firebaseUtils';
import { signInSuccess, signInFail, signOutSuccess, signOutFail } from './actions';

export function* getUserSnapshot(user, additionalData) {
  try {
    const userRef = yield call(createUserProfile, user, additionalData)
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
export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshot(userAuth)
  } catch (err) {
    yield put(signInFail(err))
  }
}
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (err) {
    yield put(signOutFail())
  }
}
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield getUserSnapshot(user, { displayName })
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
export function* onCheckUserSession() {
  yield takeLatest(actionTypes.CHECK_USER_SESSION, checkUserSession)
}
export function* onSignOutStart() {
  yield takeLatest(actionTypes.SIGN_OUT_START, signOut)
}
export function* onSignUpStart() {
  yield takeLatest(actionTypes.SIGN_UP_START, signUp)
}

export default function* () {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart)])
}