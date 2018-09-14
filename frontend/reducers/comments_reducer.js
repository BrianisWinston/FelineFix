import { ADD_COMMENT,
         REMOVE_COMMENT,
         ADD_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_COMMENT:
    if (Object.keys(oldState).includes(action.payload.comment.photo_id.toString())) {
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
      let newState = merge({}, oldState);
      let deleted;
      console.log(oldState[action.photo.photo.id]);
      Object.values(newState[action.photo.photo.id]).forEach((comment, idx) => {
        if (comment.id === action.photo.photo.oldId) {
          delete newState[action.photo.photo.id][idx];
          deleted = true;
        } else if (deleted !== undefined) {
          newState[action.photo.photo.id][idx - 1] = comment;
          delete newState[action.photo.photo.id][idx];
        }
      })
      console.log(newState[action.photo.photo.id]);
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
