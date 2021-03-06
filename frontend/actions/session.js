import { postUser, postSession, deleteSession, updateUserPhoto } from '../util/session';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createNewUser = formUser => dispatch => (
  postUser(formUser).then(user => dispatch(receiveCurrentUser(user)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = formUser => dispatch => (
  postSession(formUser)
  .then(user => dispatch(receiveCurrentUser(user)),
  err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  deleteSession().then(() => dispatch(logoutCurrentUser()))
);

export const updateUserInfo = img => dispatch => (
  updateUserPhoto(img)
    .then( user => dispatch(receiveCurrentUser(user)))
);
