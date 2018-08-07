import * as PhotoApiUtil from '../util/photo';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
console.log('In fetchPhoto action');

export const fetchPhotos = () => dispatch => (
  PhotoApiUtil.fetchPhotos().then(photos => dispatch(receiveAllPhotos(photos)))
);

export const fetchPhoto = id => dispatch => (
  PhotoApiUtil.fetchPhoto(id).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  PhotoApiUtil.createPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const updatePhoto = photo => dispatch => (
  PhotoApiUtil.updatePhoto(photo)
             .then(photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = photoId => dispatch => (
  PhotoApiUtil.deletePhoto(photoId).then(photo => dispatch(removePhoto(photoId)))
);

const receiveAllPhotos = photos => ({
  type: RECEIVE_ALL_PHOTOS,
  photos
});

const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});
