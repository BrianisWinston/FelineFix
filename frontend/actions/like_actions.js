import * as LikeApiUtil from '../util/like';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const addLike = photo_id => dispatch => {

  LikeApiUtil.addLike(photo_id).then(photo => {
    return photo;
  })
  .then(photo => dispatch(createLike(photo)))
};

export const deleteLike = photo_id => dispatch => {

  LikeApiUtil.deleteLike(photo_id).then(photo => {
    return photo;
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
