import React from 'react';
import { connect } from 'react-redux';

const LikeCount = ({photo, likeState}) => {
  let likeStatus = "ye"

  if (photo.people_liked.length === 1 && likeState) {
    likeStatus = "Liked by you";
  } else if (photo.people_liked.length === 2 && likeState) {
    likeStatus = "Liked by you and 1 other"
  } else if (photo.people_liked.length < 2 && likeState) {
    likeStatus = `Liked by you and ${photo.people_liked.length - 1} others`
  } else {
    likeStatus = `${photo.people_liked.length} likes`
  };

  return (
    <div>
      {likeStatus}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const likeState = ownProps.photo.people_liked.includes(state.session.currentUser.username)
  return { likeState, };
}

export default connect(mapStateToProps)(LikeCount);
