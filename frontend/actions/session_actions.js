// import everything from util file
import * as SessionAPIUtil from "../util/session_api_util";
// create const for action type
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';
export const RECEIVE_LOGIN_ERRORS = 'RECEIVE_LOGIN_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};

export const receiveSignupErrors = errors => {
  return {
    type: RECEIVE_SIGNUP_ERRORS,
    errors
  }
};

export const receiveLoginErrors = errors => {
  return {
    type: RECEIVE_LOGIN_ERRORS,
    errors
  }
};

// Thunk action creators
export const signup = user => dispatch => {
  return SessionAPIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveSignupErrors(err.responseJSON))
  ))
};

export const login = user => dispatch => {
  return SessionAPIUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user))
  }, err => {
    return dispatch(receiveLoginErrors(err.responseJSON))
  })
};

export const logout = () => dispatch => {
  return SessionAPIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
};
