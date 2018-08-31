import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import AllPhotosContainer from '../photos/all_photos_container';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = props.currentUser;
    this.logout = props.logout;
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    if (this.currentUser) {
    return (
      <div>
        <Navbar logout={this.logout} createPhoto={this.props.createPhoto} currentUser={ this.currentUser }/>
        <div>
          <AllPhotosContainer />
        </div>
      </div>
    )
    } else {
      return(
        <div>
          <div>You're not logged in!</div>
          <Link className="btn" to="/signup">Sign Up</Link>
          <Link className="btn" to="/">Login!</Link>
        </div>
      )
    };
  }
};

export default Home;
