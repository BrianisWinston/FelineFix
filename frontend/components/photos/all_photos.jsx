import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import SinglePhoto from './single_photo';
import LikeContainer from '../likes/like_container';
import LikeCount from '../likes/like_count';
import CommentContainer from '../comments/comment_container';
import DeletePhoto from './delete_photo';

class AllPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      imgModal: "not set yet",
      caption: "not set yet",
    };

    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal(photo) {
    this.setState({ open: true });
    this.setState({ imgModal: photo.img_url })
    this.setState({ caption: photo.caption })
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  componentDidMount() {
    let list = this.props.fetchPhotos();
  }


  render () {
    return (
      <div className="photo-whole">
        <ul className="photo-reversed">
          <Modal open={this.state.open} onClose={this.onCloseModal} center
            classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}>
            <img src={this.state.imgModal} className="single-img-modal"/>
          </Modal>
          { this.props.photos.map((photo, idx)=> (
              <li key={idx}>
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
                    <DeletePhoto deletePhoto={this.props.deletePhoto} photo={photo} currentUser={this.props.currentUser}/>
                  </div>
                  <div className="photo-box">
                    <img className="photo-image" src={photo.img_url} onClick={() => this.onOpenModal(photo)}/>

                  </div>
                  <div className="photo-comment-section">
                    <div className="photo-comment-icons">
                      <LikeContainer photo_id={photo.id} />
                    </div>
                    <LikeCount photo={photo}/>
                    <div className="photo-comment-comments">
                      <div className="photo-username">
                        {photo.username}
                      </div>
                      <div className="photo-caption">
                        {photo.caption}
                      </div>
                      <CommentContainer photo={photo} currentUser={this.props.currentUser}/>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default AllPhotos;
