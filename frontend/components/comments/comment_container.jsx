import React from 'react';
import { connect } from 'react-redux';
import { fetchComments,
         createComment,
         deleteComment } from '../../actions/comment_actions';
import CommentComponent from './comment';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  console.log('container');
  // console.log(state);
  let newComments = [];
  let newUsers = [];
  ownProps.comments.forEach(obj => newComments.push(obj.body));
  ownProps.comments.forEach(obj => newUsers.push(obj.username));
  // console.log(`new comments ${newComments}`);
  // console.log(`new userss ${newUsers}`);
  const commentState = {
    photo: ownProps.photo,
    currentUser: ownProps.currentUser,
    comments: newComments,
    usersOfComments: newUsers
  }
  console.log(commentState);
  return commentState;
  // return Object.values(state.comments);
};

const mapDispatchToProps = dispatch => ({
  fetchComments: photoId => dispatch(fetchComments(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
