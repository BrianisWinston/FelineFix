import * as CommentAPIUtil from "../util/comment";

export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const addComments = comments => ({
  type: ADD_COMMENTS,
  comments
});

const addComment = payload => ({
  type: ADD_COMMENT,
  payload
})

const removeComment = photo => ({
  type: REMOVE_COMMENT,
  photo
})

export const fetchComments = photoId => dispatch => {
  // console.log('comment actions');
  return CommentAPIUtil.fetchComments(photoId).then(comments => dispatch(addComments(comments)));
};

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(payload => dispatch(addComment(payload)))
);

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId).then(photo => dispatch(removeComment(photo)))
);
