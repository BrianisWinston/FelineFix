import React from 'react';
import { connect } from 'react-redux';
import { addLike, deleteLike } from '../../actions/like_actions';
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const photo = state.photos[ownProps.photo_id];
  const likeState = photo.people_liked.includes(state.session.currentUser.username);
  return {
    likeState
  };
};

const mapDispatchToProps = (dispatch) => ({
  addLike: (photo_id) => dispatch(addLike(photo_id)),
  deleteLike: (photo_id) => dispatch(deleteLike(photo_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Like);
