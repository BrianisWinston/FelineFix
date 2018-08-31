import React from 'react';
import { connect } from 'react-redux';
import { login, logout, receiveErrors } from '../../actions/session';
import Login from './login';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
