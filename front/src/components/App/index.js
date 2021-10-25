// == Import npm
import React from 'react';

// == Import
import Menu from "../Menu/index";
import Footer from "../Footer/index";
import CakesList from "../CakesList/index";
import LoginForm from '../LoginForm';
import './styles.css';


// == Composant
const App = () => (
  <div className="app">
    <LoginForm />
    <Menu />
    <CakesList />
    <Footer />
  </div>
);

// == Export
export default App;
