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
    console.log('comments reducer');
    console.log(action.comments[0]);
      let newstuff = merge({}, action.comments)
      // console.log('newstuff');
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
