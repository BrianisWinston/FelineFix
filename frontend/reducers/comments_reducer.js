import { ADD_COMMENT,
         REMOVE_COMMENT,
         ADD_COMMENTS } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case ADD_COMMENT:
    case ADD_COMMENTS:
    case REMOVE_COMMENT:
    default:
      return oldState;
  }
};

export default CommentsReducer;
