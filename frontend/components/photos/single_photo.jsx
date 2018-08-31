import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import DeletePhoto from './delete_photo';

const SinglePhoto = ({ photo, currentUser, deletePhoto, open, onClose, openModal, imgModal }) => {
  if (currentUser.username == photo.username) {
    return (
      <li>
        <div className="photo-entity">
          <div className="photo-header">
            <div className="photo-header-info">
              <div className="photo-user-icon">
                <i className="far fa-user"></i>
              </div>
              <div className="photo-user">
                { photo.username }
              </div>
              <DeletePhoto deletePhoto={deletePhoto} photo={photo} />
            </div>
          </div>
          <div className="photo-box">
            <img className="photo-image" src={photo.img_url} onClick={openModal}/>
            <Modal open={open} onClose={onClose} center>
              <img src={imgModal}/>
            </Modal>
          </div>
          <div className="photo-comment-section">
            <div className="photo-comment-icons">
              <div>
                <i className="fas fa-heart"></i>
              </div>
              <button className="photo-edit-button">Edit</button>
            </div>
            <div className="photo-comment-likes">
            NO LIKES (yet)</div>
            <div className="photo-comment-comments">
              <div className="photo-username">
                {photo.username}
              </div>
              <div className="photo-caption">
                {photo.caption}
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  } else {
    return (
      <li>
        <div className="photo-entity">
          <div className="photo-header">
            <div className="photo-header-info">
              <div className="photo-user-icon">
                <i className="far fa-user"></i>
              </div>
              <div className="photo-user">
                { photo.username }
              </div>
            </div>
          </div>
          <div className="photo-box">
            <img className="photo-image" src={photo.img_url} onClick={openModal}/>
            <Modal open={open} onClose={onClose} center>
              <img className="photo-image" src={photo.img_url}/>
            </Modal>
          </div>
          <div className="photo-comment-section">
            <div className="photo-comment-icons">
              <div>
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="photo-comment-likes">
            NO LIKES (yet)</div>
            <div className="photo-comment-comments">
              <div className="photo-username">
                {photo.username}
              </div>
              <div className="photo-caption">
                {photo.caption}
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  };
}

export default SinglePhoto;
