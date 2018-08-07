import React from 'react';

const Like = props => {

  const handleLikeAction = () => {
    const { photoId, deleteLike, addLike } = props;

    if (props.likeState) {
      deleteLike(photoId);
    } else {
      addLike(photoId);
    }
  };

  const classes =
  `fa fa-lg ${props.likeState ?
    "fa-heart liked-icon" :
    "fa-heart-o likes-icon"}`;

  return (
    <div
      onClick={handleLikeAction}
      className={classes} />
  );
};

export default Like;
