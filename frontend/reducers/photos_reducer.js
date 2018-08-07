import { RECEIVE_ALL_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';
import { ADD_LIKE, REMOVE_LIKE} from '../actions/like_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
    console.log('photos reducer')
      return merge({}, action.photos);
    case ADD_LIKE:
    case REMOVE_LIKE:
    case RECEIVE_PHOTO:
    console.log('photo reducer');
      return merge({}, oldState, {[action.photo.id]: action.photo});
    case REMOVE_PHOTO:
      let newState = merge({}, oldState);
      delete newState[action.photoId];
      return newState;
    default:
      return oldState;
  }
};

export default PhotosReducer;
