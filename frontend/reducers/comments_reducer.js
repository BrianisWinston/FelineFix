import { ADD_COMMENT,
         REMOVE_COMMENT,
         ADD_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_COMMENT:
      // console.log(action);
      // console.log('comments reducer');
      return merge({}, oldState, {[action.comment.id]: action.comment})
    case ADD_COMMENTS:
    // console.log('comments reducer');
    // console.log(action.comments);
      let newmaybe = {}
      let secondpojo = {}
      action.comments.forEach((comment, idx) => {
        secondpojo[idx] = comment
      })
      newmaybe[action.comments[0].photo_id] = secondpojo
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
