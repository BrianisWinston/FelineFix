import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  return (
    <header>
      <div className="btn-box">
        <p className="btn">
          Don't have an account? <Link className="signup-link" to="/">Sign Up</Link>
        </p>
      </div>
    </header>
  )
}
