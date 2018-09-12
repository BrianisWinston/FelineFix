import React from 'react';
import { connect } from 'react-redux';
import { fetchComments,
         createComment,
         deleteComment } from '../../actions/comment_actions';
import CommentComponent from './comment';
import merge from 'lodash/merge';

const mapStateToProps = (state, ownProps) => {
  // console.log('container');
  // console.log(ownProps.photo.id);
  let newComments = [];
  let newUsers = [];
  let commentIds = [];
  if (state.comments[ownProps.photo.id] !== undefined) {
    Object.values(state.comments[ownProps.photo.id]).forEach(obj => {
      newComments.push(obj.body);
      newUsers.push(obj.username);
      commentIds.push(obj.id)
    });
  }
  console.log('comment container');
  console.log(newComments);
  console.log(newUsers);
  console.log(commentIds);
  // if (state.comments[ownProps.photo.id] !== undefined) {
  //   console.log(Object.values(state.comments[ownProps.photo.id]));
  // }
  // console.log(`new comments ${newComments}`);
  // console.log(`new userss ${newUsers}`);
  const commentState = {
    photo: ownProps.photo,
    currentUser: ownProps.currentUser,
    comments: newComments,
    usersOfComments: newUsers,
    commentIds: commentIds
  }
  // console.log(commentState);
  return commentState;
  // return Object.values(state.comments);
};

const mapDispatchToProps = dispatch => ({
  fetchComments: photoId => dispatch(fetchComments(photoId)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentComponent);
