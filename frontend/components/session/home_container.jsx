import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions'
import Home from './home';

const mapStateToProps = (state) => {
  return {currentUser: state.session.currentUser}
};
console.log('home container');
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchPhotos: () => dispatch(fetchPhotos()),
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
