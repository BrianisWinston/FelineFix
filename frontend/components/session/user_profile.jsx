import React from 'react';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
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
