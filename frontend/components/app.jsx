import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    <Switch>
      <Route exact path="/" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/:userId" component={UserProfile} />
    </Switch>
  </div>
);

export default App;
