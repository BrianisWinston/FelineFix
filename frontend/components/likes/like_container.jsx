import React from 'react';
import { connect } from 'react-redux';
import { addLike, deleteLike } from '../../actions/like_actions';
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  const photo = state.photos[ownProps.photoId];
  const likeState = photo.people_liked.includes(state.session.currentUser.username);
  return {
    likeState
  };
};

const mapDispatchToProps = (dispatch) => ({
  addLike: (photoId) => dispatch(addLike(photoId)),
  deleteLike: (photoId) => dispatch(deleteLike(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
