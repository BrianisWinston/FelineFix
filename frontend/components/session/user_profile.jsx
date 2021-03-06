import React from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      img_url: "",
      modalPhoto: ""
    }
    // console.log(this.props.currentUser.img_url);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.postPhoto = this.postPhoto.bind(this);
  }

  componentDidMount() {
    let newPhotos = [];
    this.props.fetchPhotos()
    .then(data => {
      Object.entries(this.props.photos).filter( photo => {
        if (photo[1].user_id == this.props.match.params.userId) {
          newPhotos.push(photo[1])
        }
      });
      this.setState({
        photos: newPhotos,
        username: newPhotos[0].username,
        img_url: newPhotos[0].avatar_icon
      });
    });
  }

  // MODAL LOGIC--------------------------------------------------------
  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  postPhoto(e) {
    e.preventDefault();
    if (this.state.modalPhoto !== "") {
      let newPhoto = { img_url: this.state.modalPhoto, user_id: this.props.currentUser.id };
      this.props.updateUserInfo(newPhoto)
      .then(() => this.props.history.replace(this.props.location.pathname));
      // console.log(`history: ${this.props.history}`);
      this.closeModal();
      this.setState({img_url: this.state.modalPhoto, modalPhoto: ""})
      scrollTo(0, 0);
    }
  }

  handleDrop(files) {
    let file = files[0]
    const uploadPreset = window.cloudinary_options.upload_preset;
    const uploadUrl = `https://api.cloudinary.com/v1_1/${window.cloudinary_options.cloud_name}/image/upload`;

    let upload = request.post(uploadUrl)
                        .field('upload_preset', uploadPreset)
                        .field('file', file);

    upload.end((err, response) => {

      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          modalPhoto: response.body.secure_url,
        });
      }
    });
  }

  renderDropzone() {
    return (
      <Dropzone
        className="upload-avatar-photo-dropzone"
        multiple={false}
        accept="image/*"
        onDrop={this.handleDrop}>
        <div className="upload-photo-dropzone-content">
          <div className="modal-avatar-doc-icon"></div>
          <p className="modal-avatar-upload-text">Drag over an image or click</p>
          <p className="modal-avatar-upload-text">to select a file to upload!</p>
        </div>
      </Dropzone>
    );
  }

  renderPhoto() {
    if (this.state.modalPhoto === "") {
      return this.renderDropzone();
    } else {
      return (
        <img
          className="modal-avatar-photo-preview"
          src={this.state.modalPhoto}
        />
      )
    }
  }

  renderAvatar() {
    if (this.state.img_url === "") {
      return (
        <div>
          <i className="far fa-user"></i>
        </div>
      )
    } else {
      return (
        <img
          className="user-profile-pic-icon"
          src={this.state.img_url}
        />
      )
    }
  }

  cancelPhoto() {
    this.setState({
      img_url: ""
    })
    this.closeModal();
  }

  stylingDisplay() {
    let newStyle;
    if (this.state.photos.length !== 0 && this.state.photos[0].user_id === this.props.currentUser.id) {
      newStyle = {display: 'inline'};
    } else {
      newStyle = {display: 'none'};
    }
    return newStyle;
  }

  render() {
    let stylingDisplay = this.stylingDisplay();
    return (
      <div className="user-profile">
        <div className="user-profile-header">
          <div className="user-profile-pic">
            {this.renderAvatar()}
          </div>
          <div className="user-profile-info">
            <div className="user-profile-name">
              {this.state.username}
            </div>
            <span>
              <button onClick={this.openModal} className="user-profile-upload" style={stylingDisplay}>
                Upload Profile Picture
              </button>
              <Modal
                className="modal-box"
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                style={{
                  overlay: {
                    position: 'fixed',
                    overflow: 'auto',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: 'auto',
                    backgroundColor: 'rgba(89, 89, 89, 0.75)',
                    zIndex: 1
                  },
                  content: {
                    position: 'relative',
                    margin: '10% auto auto',
                    border: '1px solid #e6e6e6',
                    background: '#fff',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                    marginBottom: '40px',
                    height: '410px',
                    width: '300px'
                    }
                  }
                }
              >
              <button className="modal-exit" onClick={this.closeModal}>{<i className="fas fa-times"></i>}</button>
              <form onSubmit={this.postPhoto}>
                <div className="modal-avatar-photo-box">
                  {this.renderPhoto()}
                </div>
                <div className="modal-buttons">
                  <input className="modal-submit" type="submit" value="Upload" />
                  <button className="modal-avatar-cancel" onClick={this.cancelPhoto.bind(this)}>Cancel</button>
                </div>
              </form>
              </Modal>
            </span>
            <div className="user-profile-bio">
              <h4>Bio</h4>
              <span>
                znvez epljc plztu uxrxq xpclo meutg akefo cpsjh vwonr shyly
                afobq tzelc cmhnj gvpjp ebcmh vbdtv mevak lidro egriu shxkv
              </span>
            </div>
          </div>
        </div>
        <div className="user-profile-photos-container">
          <ul className="user-profile-photos-ul">
              {this.state.photos
                .sort((a, b) => b.id - a.id)
                .map( (photo, id) => (
                <li className="user-profile-photos-li" key={id}>
                  <img src={photo.img_url}/>
                </li>
                )
              )}
          </ul>
        </div>
      </div>
    )
  }
};

export default UserProfile;
