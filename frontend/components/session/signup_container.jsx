import { connect } from 'react-redux';
import { createNewUser, logout, receiveErrors, login } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  logout: () => dispatch(logout()),
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
