import * as LikeApiUtil from '../util/like';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const addLike = photo_id => dispatch => {
  console.log('add like actions');

  LikeApiUtil.addLike(photo_id).then(photo => dispatch(createLike(photo)))
};

export const deleteLike = photo_id => dispatch => {
  console.log('delete like actions');

  LikeApiUtil.deleteLike(photo_id).then(photo => {
    console.log(photo);
    console.log(photo.people_liked);
  }).then(photo => dispatch(removeLike(photo))
  );
};

const createLike = photo => ({
  type: ADD_LIKE,
  photo
});

const removeLike = photo => ({
  type: REMOVE_LIKE,
  photo
});
