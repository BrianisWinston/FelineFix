import { combineReducers } from 'redux';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
import photosReducer from './photos_reducer';
import commentsReducer from './comments_reducer';

export default combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  photos: photosReducer,
  comments: commentsReducer
});
