import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-redux';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './session/home_container';
import UserProfile from './session/user_profile';
import NavContainer from './session/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="background">
    <header>
      <ProtectedRoute path="/" component={NavContainer} />
    </header>
      <Route exact path="/" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/:userId" component={UserProfile} />
  </div>
);

export default App;
