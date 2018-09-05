import React from 'react';
import { connect } from 'react-redux';

const LikeCount = ({photo, likeState}) => {
  let likeStatus = "ye"

  if (photo.people_liked.length === 1 && likeState) {
    likeStatus = "Liked by you";
  } else if (photo.people_liked.length === 1 && likeState === false) {
    likeStatus = "1 like"
  } else if (photo.people_liked.length === 2 && likeState) {
    likeStatus = "Liked by you and 1 other"
  } else if (likeState && photo.people_liked.length > 2) {
    likeStatus = `Liked by you and ${photo.people_liked.length - 1} others`
    // console.log(photo.people_liked.length);
    // console.log(likeState);
  } else {
    likeStatus = `${photo.people_liked.length} likes`;
    // console.log(photo.people_liked.length);
    // console.log(likeState);
  };

  return (
    <div className="photo-comment-likes">
      {likeStatus}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const likeState = ownProps.photo.people_liked.includes(state.session.currentUser.username)
  return { likeState, };
}

export default connect(mapStateToProps)(LikeCount);
