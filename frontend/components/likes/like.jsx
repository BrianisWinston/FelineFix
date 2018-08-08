import React from 'react';

const Like = props => {
  const handleLikeAction = () => {
    const { photo_id, deleteLike, addLike } = props;
    console.log(photo_id);

    if (props.likeState) {
      deleteLike(photo_id);
    } else {
      addLike(photo_id);
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
