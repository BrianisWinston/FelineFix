import React from 'react';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    this.props.fetchPhotos();
    let newPhotos = [];
    Object.entries(this.props.photos).filter( photo => {
      console.log(`${photo[1].user_id} == ${this.props.match.params.userId} : ${photo[1].user_id == this.props.match.params.userId}`);
      if (photo[1].user_id == this.props.match.params.userId) {
        newPhotos.push(photo[1])
      }
    });
    console.log(`new photos: ${newPhotos}`);
    this.setState({photos: newPhotos})
  }

  render() {
    let logic = 'hello';
    
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
