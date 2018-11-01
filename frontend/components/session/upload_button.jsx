import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class UploadButton extends React.Component {
  constructor(props) {
    super(props)
    this.upload = this.upload.bind(this);
    this.postPhoto = this.postPhoto.bind(this);
// modal logic ----------------------------------------------------
    this.state = {
      modalIsOpen: false,
      caption: "",
      createdPhoto: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  postPhoto(e) {
    e.preventDefault();
    let captionValue = this.state.caption
    let newPhoto = { img_url: this.state.createdPhoto, caption: captionValue };
    this.props.createPhoto(newPhoto);
    this.closeModal();
    this.setState({createdPhoto: "", caption: ""})
  }

  upload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, photos) => {
        if (error === null) {
          let newState = Object.assign({}, this.state, {createdPhoto: photos[0].url});
          this.setState(newState);
        }
      }
  )}

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  render() {
    return(
      <div>
        <button className="uploadbutton" onClick={this.openModal}></button>
        <div >
          <Modal
            className="modal-box"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: 'auto',
                backgroundColor: 'rgba(89, 89, 89, 0.75)'},
              content: {
                position: 'relative',
                margin: '10% auto auto',
                border: '1px solid #e6e6e6',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
                }
              }
            }
          >

            <button className="modal-exit" onClick={this.closeModal}>{<i className="fas fa-times"></i>}</button>
                <form onSubmit={this.postPhoto}>
                  <div className="modal-photo-box">
                    <img
                      className="modal-photo-preview"
                      src={ this.state.createdPhoto }
                    />
                  </div>
                  <div className="modal-caption">
                    <textarea
                      className="modal-caption-input"
                      placeholder="Insert caption here..."
                      value={this.state.caption}
                      onChange={this.update('caption')}
                      />
                  </div>
                <div className="modal-buttons">
                  <button className="modal-upload" onClick={this.upload}>Import Photo</button>
                  <input className="modal-submit" type="submit" value="Submit" />
                </div>
                <div className="modal-icon-felinefix">
                  <i className="fas fa-paw"></i>
                </div>
                </form>
          </Modal>
        </div>
      </div>
    )
  }
}

export default UploadButton;
