import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './session/home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="background">
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/home" component={HomeContainer} />
    <Route exact path="/" component={SignupContainer} />
  </div>
);

export default App;
