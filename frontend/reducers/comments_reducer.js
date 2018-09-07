import { ADD_COMMENT,
         REMOVE_COMMENT,
         ADD_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_COMMENT:
      return merge({}, oldState, {[action.comment.id]: action.comment})
    case ADD_COMMENTS:
      return merge({}, action.comments)
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
