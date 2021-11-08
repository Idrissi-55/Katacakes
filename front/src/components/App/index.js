// == Import npm
import React, {useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';

// == Import
import Menu from "src/components/Menu";
import Cake from "src/containers/Cake";
import Home from "src/containers/Home";
import Footer from "src/components/Footer";
import Contact from 'src/components/ContactPage';
import About from 'src/components/About';
import Faq from 'src/components/FAQ';
import Error from '../Error';

import './style.scss';


// == Composant
function App({fetchAllCakes}) {
  
  useEffect(fetchAllCakes, []);
  // if (props.loading) {
  //   return <Loading />;
  // }
  return (
    <div className="app">
      <Menu />
      <Switch>
        {/* <LoginForm /> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cakes/:_id">
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

// == Export
export default App;
