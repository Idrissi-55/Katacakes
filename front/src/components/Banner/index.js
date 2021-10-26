import React from "react";
// import {Link} from 'react-router-dom';
// import LoginForm from '../LoginForm';

import './style.scss'
import logo from '../../../public/images/logo.png'

const Banner = () => {
  return (
    <div className="banner">
      <img src={logo} className="logo" />
      {/* <LoginForm className="loginForm"/> */}
    </div>
  )
}

export default Banner;
