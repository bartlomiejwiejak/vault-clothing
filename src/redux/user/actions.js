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
export const googleSignInSuccess = (user) => ({
  type: actionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
})
export const googleSignInFail = (err) => ({
  type: actionTypes.GOOGLE_SIGN_IN_FAIL,
  payload: err
})
export const emailSignInStart = () => ({
  type: actionTypes.EMAIL_SIGN_IN_START
})
export const emailSignInSuccess = (user) => ({
  type: actionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
})
export const emailSignInFail = (err) => ({
  type: actionTypes.EMAIL_SIGN_IN_FAIL,
  payload: err
})