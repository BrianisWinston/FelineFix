import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      img_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoHandleSubmit = this.demoHandleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then( () => this.props.history.push('/home'));
  }

  demoHandleSubmit(e) {
    e.preventDefault();
    this.props.login({username: "PleaseHireMe", password: "123456"})
      .then(() => this.props.history.push('/home'));
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

  render () {
    if (this.props.currentUser) {
    return (
      <div>
      <h3>You're already logged in, {this.props.currentUser.username}!</h3>
      <button onClick={this.props.logout}>Logout</button>
      {this.renderErrors()}
      </div>
  )} else {
    return (
      <div className="signupstart">
        <div className="iPhone-img">
        </div>
        <div className="signup-form">
          <form className="form">
            <div className="logo">
              FelineFix
            </div>
            <p className="signup-phrase">
              Sign up to get your daily FelineFix!
            </p>
            <div className="button-2">
              <button onClick={this.demoHandleSubmit}>Log in as Demo User</button>
            </div>
            <h1 className="signup-or"><span>OR</span></h1>
            <label>
              <input
                className="signup-input-dis"
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleInput('username')}
                />
            </label>
            <label>
              <input
                className="signup-input-dis"
                placeholder="Email"
                type="email"
                value={this.state.email}
                onChange={this.handleInput('email')}
                />
            </label>
            <label>
              <input
                className="signup-input-dis"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                />
            </label>
            <div className="signup-button">
              <button onClick={this.handleSubmit}>Sign Up</button>
            </div>
            {this.renderErrors()}
            <div className="signup-terms">
              By signing up, you agree to our
              <p> </p>
              <a className="signup-terms-link" href="https://www.jarofquotes.com/quotes/472424.jpg" target="_blank">Terms</a>
              &
              <a className="signup-terms-link" href="http://s2.quickmeme.com/img/c5/c5d5b517c9a526eb953dd4fd121667040b3512959c8de616ec8f2f01190d3540.jpg" target="_blank">Privacy Policy.</a>
            </div>
            <div className="btn-box">
              <p className="btn">
                Have an account? <Link className="login-link" to="/">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  };
  }
};

export default Signup;
