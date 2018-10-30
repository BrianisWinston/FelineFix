import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import { logout } from '../../actions/session';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: photo => dispatch(createPhoto(photo)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
