import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';
import AllPhotos from './all_photos';

const mapStateToProps = (state) => {
  // console.log('photo container')
  // console.log(state.comments);
  return {
  currentUser: state.session.currentUser,
  photos: Object.values(state.photos),
  comments: Object.values(state.comments)
}
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);
