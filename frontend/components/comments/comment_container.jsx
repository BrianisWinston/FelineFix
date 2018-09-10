import React from 'react';
import { connect } from 'react-redux';
import { fetchComments,
         createComment,
         deleteComment } from '../../actions/comment_actions';
import CommentComponent from './comment';

const mapStateToProps = (state, ownProps) => {
  const whasgood = {
    photo: ownProps.photo,
    currentUser: ownProps.currentUser,
  }
  return whasgood;
};

const mapDispatchToProps = dispatch => ({
  fetchComments: photoId => dispatch(fetchComments(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
