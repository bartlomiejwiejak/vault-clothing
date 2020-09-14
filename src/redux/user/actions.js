import actionTypes from './actionTypes';

export const setCurrentUser = user => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user
  }
}
export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
})
export const signInSuccess = (user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
})
export const signInFail = (err) => ({
  type: actionTypes.SIGN_IN_FAIL,
  payload: err
})
export const emailSignInStart = (credentials) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: credentials
})