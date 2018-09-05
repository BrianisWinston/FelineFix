import React from 'react';
import { connect } from 'react-redux';

const LikeCount = ({photo, likeState}) => {

  if (photo.people_liked.length === 1 && likeState) {
    const likeStatus = "Liked by you";
  } else if (photo.people_liked.length === 2 && likeState) {
    const likeStatus = `Liked by you and ${photo.people_liked.length - 1} other`
  } else if (photo.people_liked.length < 2 && likeState) {
    const likeStatus =
  };

  return (
    <div>
      {likeStatus}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const likeState = ownProps.photo.people_liked.includes(state.session.currentUser.username)
  return likeState;
}

export default connect(mapStateToProps)(LikeCount);
