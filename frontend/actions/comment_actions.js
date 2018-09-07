import * as CommentAPIUtil from "../util/comment";

export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const addComments = comments => ({
  type: ADD_COMMENTS,
  comments
});

const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

const removeComment = photo => ({
  type: REMOVE_COMMENT,
  photo
})

export const fetchComments = photoId => dispatch => (
  CommentAPIUtil.fetchComments(photoId).then(comments => dispatch(addComments(comments)))
);

export const createComment = comment => dispatch => (
  CommentAPIUtil.createComment(comment).then(comment => dispatch(addComment(comment)))
)

export const deleteComment = commentId => dispatch => (
  CommentAPIUtil.deleteComment(commentId) => (photo => dispatch(removeComment(photo)))
)