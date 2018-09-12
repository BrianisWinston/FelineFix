import { ADD_COMMENT,
         REMOVE_COMMENT,
         ADD_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_COMMENT:
    console.log(oldState);
    if (Object.keys(oldState).includes(action.payload.comment.photo_id)) {
      let idx = Object.keys(oldState[action.payload.comment.photo_id]).length;
      let pojo = { [idx]: action.payload.comment }
      return merge({}, oldState, {[action.payload.comment.photo_id]: pojo})
    } else {
      let newComment = { 0: action.payload.comment }
      return merge({}, oldState, { [action.payload.comment.photo_id]: newComment })
    }
    case ADD_COMMENTS:
      let newmaybe = {}
      let secondpojo = {}
      action.comments.forEach((comment, idx) => {
        secondpojo[idx] = comment
      })
      if (action.comments[0] !== undefined) {
        newmaybe[action.comments[0].photo_id] = secondpojo
      }
      let newstuff = merge({}, oldState, newmaybe)
      return newstuff;
    case REMOVE_COMMENT:
      let deletedComment
      let newState = merge({}, oldState);
      console.log(action);
      Object.values(newState[action.photo.photo.id]).forEach(comment => {
        if (comment.id === action.photo.photo.oldId) {
          deletedComment = comment;
        }
      });
      console.log(deletedComment)
      console.log(newState[action.id]);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
