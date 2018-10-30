import React from 'react';
import UploadButton from './upload_button';
import UserProfile from './user_profile';
import { Link } from 'react-router-dom';

export default ({ logout, currentUser, createPhoto }) => {
  console.log(` User ID: ${currentUser.id}`);
  return (
    <header>
      <div className="nav">
        <div className="navbar">
          <div className="leftside">
            <Link to='/'>
              <div className="icon-felinefix">
                <i className="fas fa-paw"></i>
              </div>
              <div className="icon-logo">
                FelineFix
              </div>
            </Link>
          </div>
          <div className="middle">
            <input
              className="navbar-search"
              placeholder="Search"
              type="text"
              />
          </div>
          <div className="rightside">
            <button className="navbar-logout" onClick={logout}>Logout </button>
            <UploadButton createPhoto={createPhoto} />
            <Link to={`/${currentUser.id}`} className="profile-icon"></Link>
          </div>
        </div>
      </div>
    </header>
  )
}
