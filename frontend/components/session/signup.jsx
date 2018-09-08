import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

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
      return <Redirect to="/home" />
    } else {
      return (
        <div>
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
                    Have an account? <Link className="login-link" to="/login">Log in</Link>
                  </p>
                </div>
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
    };
  }
};

export default Signup;
