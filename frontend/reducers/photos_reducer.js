import { RECEIVE_ALL_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return merge({}, action.photos);
    case ADD_LIKE:
      let newlike = merge({}, oldState, {[action.photo.id]: action.photo});
      return newlike
    case REMOVE_LIKE:
      let newlike = merge({}, oldState, {[action.photo.id]: action.photo});
      newlike[action.photo.id] = action.photo;
      return newlike
    case RECEIVE_PHOTO:
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
