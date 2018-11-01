import React from 'react';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      photos: null
    }
  }

  componentDidMount() {
    this.props.fetchPhotos();
    let newPhotos = [];
    Object.entries(this.props.photos).filter( photo => {
      if (photo[1].user_id === state.match.params.userId) {
        newPhotos.push(photo[1])
      };
    });
    this.setState({photos: newPhotos});
  }

  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-header">
        </div>
        <div className="user-profile-photos-container">
          <ul className="user-profile-photos-ul">
              {this.props.photos.map( (photo, id) => (
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
