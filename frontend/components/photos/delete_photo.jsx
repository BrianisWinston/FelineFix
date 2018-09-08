import React from 'react';

export default ({ photo, deletePhoto, currentUser }) => {
  let deleteStyling = "";

  if (currentUser.username === photo.username) {
    deleteStyling = {display: 'block'}
  } else {
    deleteStyling = {display: 'none'}
  }

  return (
    <header>
      <div className="photo-delete" style={deleteStyling}>
        <button onClick={() => { deletePhoto(photo.id) }} >{<i className="fas fa-times"></i>}</button>
      </div>
    </header>
  )
}
