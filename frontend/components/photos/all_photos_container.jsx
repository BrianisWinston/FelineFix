import React from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, deletePhoto } from '../../actions/photo_actions';
import AllPhotos from './all_photos';

const mapStateToProps = (state) => {
  console.log('photos');
  console.log(Object.values(state.photos));
  return {
  currentUser: state.session.currentUser,
  photos: Object.values(state.photos)
}
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  deletePhoto: (photoId) => dispatch(deletePhoto(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);
