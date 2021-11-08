import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';

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
  },
  changeField: () => {
    console.log('change');
  },
  handleLogout: () => {
    console.log('logout');
  }
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
