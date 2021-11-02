import React from "react";
import {NavLink} from "react-router-dom";

import './style.scss';

const Menu = () => {
 
  return (
    <nav className="menu">
    <NavLink
      activeClassName="menu-link--active"
      className="menu-link"
      to="/"
      exact
    >
      Our cakes
    </NavLink>
    <NavLink
      activeClassName="menu-link--active"
      className="menu-link"
      to="/About-us"
      exact
    >
      About us
    </NavLink>
    <NavLink
      activeClassName="menu-link--active"
      className="menu-link"
      to="/FAQ"
      exact
    >
      FAQ
    </NavLink>
    <NavLink
      activeClassName="menu-link--active"
      className="menu-link"
      to="/Contact-us"
      exact
    >
      Contact us
    </NavLink>
    
  </nav>
  )}

export default Menu;

