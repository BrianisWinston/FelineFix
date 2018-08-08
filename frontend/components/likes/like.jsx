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
  `${props.likeState ?
    "fas" :
    "far"} fa-heart`;

  return (
    <div onClick={handleLikeAction} >
      <i className={classes}></i>
    </div>
  );
};

export default Like;
