import React from 'react';

export default ({ photo, deletePhoto }) => {
  return (
    <header>
      <div className="photo-delete">
        <button onClick={() => { deletePhoto(photo.id) }} >{<i className="fas fa-times"></i>}</button>
      </div>
    </header>
  )
}
