import { RECEIVE_ALL_PHOTOS,
         RECEIVE_PHOTO,
         REMOVE_PHOTO } from '../actions/photo_actions';
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import merge from 'lodash/merge';

const PhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      console.log('photos reducer')
      return merge({}, action.photos);
    case ADD_LIKE:
      console.log('add like reducer');
      let newshit = merge({}, oldState, {[action.photo.id]: action.photo});
      console.log('old')
      console.log(oldState[68].people_liked)
      console.log('new')
      console.log(newshit[68].people_liked);
      return newshit
    case REMOVE_LIKE:
      console.log('remove like reducer');
      let newpoo = merge({}, oldState, {[action.photo.id]: action.photo});
      newpoo[action.photo.id] = action.photo;
      console.log('old')
      console.log(oldState[68].people_liked)
      console.log('new')
      console.log(newpoo[68].people_liked);
      return newpoo
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
