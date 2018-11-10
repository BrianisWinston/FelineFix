import React from 'react';
import { connect } from 'react-redux';
import User from './user_profile';
import { fetchPhotos } from '../../actions/photo_actions';
import { updateUserInfo } from '../../actions/session';

const mapStateToProps = (state) => {
  // let photos = [];
  // Object.entries(state.photos).filter( photo => {
  //   if (photo[1].user_id === state.session.currentUser.id) {
  //     photos.push(photo[1])
  //   }
  // });
  // Object.entries(state.photos).map( photo => {
  //   console.log(`user ID: ${photo[1].user_id}`);
  //   console.log(state.session.currentUser.id);
  //   console.log(photo[1].user_id === state.session.currentUser.id);
  // })
  // console.log(state.session.currentUser);
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
