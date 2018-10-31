import React from 'react';

class UserProfile extends React.Component  {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div >
        {this.props.photos.map( (photo, id) => (
            <img src={photo.img_url} key={id}/>
          )
        )}
      </div>
    )
  }
};

export default UserProfile;
