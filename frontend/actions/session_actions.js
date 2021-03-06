import * as APIUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => {
  return (
  APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const logout = () => dispatch => {
  return (APIUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
                          .then(hashHistory.push(`/`)));
};

export const loginGuest = () => (dispatch) => (
  APIUtil.loginGuest().then(guest => dispatch(receiveCurrentUser(guest)))
);

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => {
  return {
    type: RESET_ERRORS
  };
};
