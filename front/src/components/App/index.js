// == Import npm
import React from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';

// == Import
import LoginForm from '../LoginForm';
import Menu from "src/components/Menu";
import Cake from "src/containers/Cake"
import Home from "src/containers/Home";
import Footer from "src/components/Footer";
import Contact from 'src/components/ContactPage';
import About from 'src/components/About';
import Faq from 'src/components/FAQ';

import './style.scss';


// == Composant
function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        {/* <LoginForm /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cake/:id">
          <Cake />
        </Route>
        <Route exact path="/About-us">
          <About />
        </Route>
        <Route exact path="/FAQ">
          <Faq />
        </Route> 
        <Route exact path="/Contact-us">
          <Contact />
        </Route>
      </Switch>
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
