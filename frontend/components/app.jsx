import React from 'react';
import { Route } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomeContainer from './session/home_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

console.log('app file');
const App = () => (
  <div className="background">
    <AuthRoute path="/signup" component={SignupContainer} />
    <ProtectedRoute path="/home" component={HomeContainer} />
    <Route exact path="/" component={LoginContainer} />
  </div>
);

export default App;
