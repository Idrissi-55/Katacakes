// == Import npm
import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

// == Import
import LoginForm from '../LoginForm';
import Menu from "src/components/Menu";
import Cake from "src/containers/Cake"
import Footer from "../Footer/index";
import Home from "src/containers/Home";

import './style.scss';


// == Composant
function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <LoginForm />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cake/:name">
        <Cake />
      </Route>
      <Footer />
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

// == Export
export default App;
