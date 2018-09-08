import React from 'react';
import { Link } from 'react-router-dom';
import LoginItem from './login_item';
import Img from 'react-image';
import Navbar from './navbar';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoHandleSubmit = this.demoHandleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    if (this.props.errors === null) return null;
    return(
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/home'));
  }

  demoHandleSubmit(e) {
    e.preventDefault();
    this.props.login({username: "PleaseHireMe", password: "123456"})
      .then(() => this.props.history.push('/home'));
  }

  render() {
    return (
      <div>
        <div className="login-start">
          <div className="iPhone-img">
          </div>
          <div className="login-form">
            <form className="form">
              <div className="logo">
                FelineFix
              </div>
              <input
                className="login-input-dis"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput('username')}
              />
              <input
                className="login-input-dis"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            <div className="button-1">
              <button onClick={this.handleSubmit}>Log in</button>
            </div>
            <div className="button-2">
              <button onClick={this.demoHandleSubmit}>Demo User</button>
            </div>
            {this.renderErrors()}
            <LoginItem className="logout-button" currentUser={this.props.currentUser} logout={this.props.logout} />
            </form>
          </div>
        </div>
        <div className="links">
          <div></div>
          <a href="https://github.com/BrianisWinston" target="_blank">github</a>
          <a href="https://www.linkedin.com/in/winston-galas-96ab3ba3/" target="_blank">linkedin</a>
          <a href="https://www.youtube.com/channel/UCI6i2KM7XBZct1CmtZtUC5A?view_as=subscriber" target="_blank">vlog</a>
          <a href="https://brianiswinston.github.io/PortfolioWebsite/" target="_blank">portfolio</a>
          <a href="https://www.facebook.com/brianiswinston" target="_blank">facebook</a>
          <a href="https://www.instagram.com/winstonisbrian/" target="_blank">instagram</a>
          <a href="https://twitter.com/brianiswinston?lang=en" target="_blank">twitter</a>
        </div>
      </div>
    )
  }
}

export default Login;
