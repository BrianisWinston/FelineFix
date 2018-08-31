import * as LikeApiUtil from '../util/like';

export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

const addLike = photo => ({
  type: ADD_LIKE,
  photo
});

const removeLike = photo => ({
  type: REMOVE_LIKE,
  photo
});
