import React from 'react';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="user-profile">
        <div className="user-profile-header">
        </div>
        <div className="user-profile-photos-container">
          <ul className="user-profile-photos-ul">
              {this.props.photos.map( (photo, id) => (
                <li className="user-profile-photos-li">
                  <img src={photo.img_url} key={id}/>
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
