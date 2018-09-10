import React from 'react';
import { connect } from 'react-redux';
import { fetchComments,
         createComment,
         deleteComment } from '../../actions/comment_actions';
import CommentComponent from './comment';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  console.log('comment container');
  // Object.values(state.comments).forEach((comment) => console.log(Object.values(comment)));
  // console.log(arr);
  const whasgood = {
    photo: ownProps.photo,
    currentUser: ownProps.currentUser,
    comments: Object.values(state.comments)
  }
  return whasgood;
};

const mapDispatchToProps = dispatch => ({
  fetchComments: photoId => dispatch(fetchComments(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
