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

  render() {
    if (this.currentUser) {
    return (
      <div className="homediv">
        <AllPhotosContainer />
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
