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
      this.setState({photos: newPhotos});
    });
  }

  render() {
    let logic = 'hello';
    console.log(this.state.photos);
    return (
      <div className="user-profile">
        <div className="user-profile-header">
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
