import React from "react";
// import {Link} from 'react-router-dom';

import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
      {/* <Link to="/contact" className="navLink"> */}
      <p className="contact">Contact Us</p>
      {/* </Link> */}
      <p className="copyright">Copyright © 2021</p>
    </div>
  )
}

export default Footer;
