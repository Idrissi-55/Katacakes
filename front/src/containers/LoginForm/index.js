import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';

import { login, loginInputChange, logout } from '../../actions/user';

const mapStateToProps = ({user}) => {
  return {
    email: user.auth.email,
    password: user.auth.password,
    isLogged: user.isLogged,
    loggedMessage: user.loggedMessage
  }
};

const mapDispatchToProps =(dispatch) => ({

  handleLogin: () => {
    console.log('login');
    dispatch(login());
  },

  changeField: (textInput, fieldName) => {
    console.log('change', textInput, fieldName);
    dispatch(loginInputChange(textInput, fieldName));
  },
  
  handleLogout: () => {
    console.log('logout');
    dispatch(logout());
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
