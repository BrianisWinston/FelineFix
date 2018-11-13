import React from 'react';
import { connect } from 'react-redux';
import User from './user_profile';
import { fetchPhotos } from '../../actions/photo_actions';
import { updateUserInfo } from '../../actions/session';

const mapStateToProps = (state) => {

  return ({
    currentUser: state.session.currentUser,
    photos: state.photos
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  updateUserInfo: (img) => dispatch(updateUserInfo(img))
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
