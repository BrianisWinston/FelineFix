import { ADD_COMMENT,
         REMOVE_COMMENT,
         ADD_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_COMMENT:
    // console.log('comments reducer');
    // console.log(action.payload);
    let idx = Object.keys(oldState[action.payload.comment.photo_id]).length;
    let pojo = { [idx]: action.payload.comment }
    return merge({}, oldState, {[action.payload.comment.photo_id]: pojo})
    case ADD_COMMENTS:
    // console.log('comments reducer');
    // console.log(action.comments);
      let newmaybe = {}
      let secondpojo = {}
      action.comments.forEach((comment, idx) => {
        secondpojo[idx] = comment
      })
      newmaybe[action.comments[0].photo_id] = secondpojo
      // console.log(secondpojo);
      // console.log(newmaybe);
      let newstuff = merge({}, oldState, newmaybe)
      // console.log(newstuff);
      return newstuff;
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
