import React from 'react';
import UploadButton from './upload_button';

export default ({ logout, currentUser, createPhoto }) => {
  return (
    <header>
      <div className="nav">
        <div className="navbar">
          <div className="leftside">
            <div className="icon-felinefix">
              <i className="fas fa-paw"></i>
            </div>
            <div className="icon-logo">
              FelineFix
            </div>
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
          </div>
        </div>
      </div>
    </header>
  )
}
