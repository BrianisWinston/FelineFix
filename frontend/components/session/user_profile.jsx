import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        username: newPhotos[0].username
      });
      console.log(newPhotos);
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
    if (this.state.createdPhoto !== "" && this.state.caption !== "") {
      let captionValue = this.state.caption
      let newPhoto = { img_url: this.state.createdPhoto, caption: captionValue };
      this.props.createPhoto(newPhoto);
      this.closeModal();
      this.setState({createdPhoto: "", caption: ""})
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
          createdPhoto: response.body.secure_url,
        });
      }
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
    if (this.state.createdPhoto === "") {
      return this.renderDropzone();
    }
  }

  cancelPhoto() {
    this.setState({
      createdPhoto: "",
      caption: ""
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
              <button className="user-profile-upload" style={stylingDisplay}>
                Upload Profile Picture
              </button>
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
              {this.state.photos.map( (photo, id) => (
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
