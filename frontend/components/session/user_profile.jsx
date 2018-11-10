import React from 'react';
import Modal from 'react-modal';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      photos: [],
      img_url: ""
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    console.log(`this.state.img_url === "": ${this.state.img_url === ""}`);
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
        username: newPhotos[0].username
      });
      // console.log(newPhotos);
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
    if (this.state.img_url !== "") {
      let newPhoto = { img_url: this.state.img_url, user_id: this.props.currentUser.id };
      this.props.updateUserInfo(newPhoto);
      this.closeModal();
      this.setState({img_url: ""})
      // scrollTo(0, 0);
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
          img_url: response.body.secure_url,
        });
      }
      console.log(`this.state.img_url: ${this.state.img_url}`);
      console.log(`this.state.img_url === "": ${this.state.img_url === ""}`);
    });
  }

  renderDropzone() {
    return (
      <Dropzone
        className="upload-photo-dropzone"
        multiple={false}
        accept="image/*"
        onDrop={this.handleDrop}>
        <div className="upload-photo-dropzone-content">
          <div></div>
          <p className="upload-photo-text">Drag over an image or click</p>
          <p className="upload-photo-text">to select a file to upload!</p>
        </div>
      </Dropzone>
    );
  }

  renderPhoto() {
    if (this.state.img_url === "") {
      return this.renderDropzone();
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
            <i className="far fa-user"></i>
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
                    height: '410px'
                    }
                  }
                }
              >
              <button className="modal-exit" onClick={this.closeModal}>{<i className="fas fa-times"></i>}</button>
              <form onSubmit={this.postPhoto}>
                <div className="modal-photo-box">
                  {this.renderPhoto()}
                  <img
                    className="modal-photo-preview"
                    src={ this.state.img_url }
                  />
                </div>
                <div className="modal-buttons">
                  <input className="modal-submit" type="submit" value="Upload" />
                  <button className="modal-cancel" onClick={this.cancelPhoto.bind(this)}>Cancel</button>
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
              {this.state.photos.reverse().map( (photo, id) => (
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
