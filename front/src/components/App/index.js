// == Import npm
import React from 'react';

// == Import
import LoginForm from '../LoginForm';
import Banner from '../Banner/index';
import Menu from "../Menu/index";
import CakesList from "../CakesList/index";
import Footer from "../Footer/index";

import './styles.css';


// == Composant
const App = () => (
  <div className="app">
    {/* <LoginForm /> */}
    <Banner />
    <Menu />
    <CakesList />
    <Footer />
  </div>
);

// == Export
export default App;
