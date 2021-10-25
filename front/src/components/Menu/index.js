import React from "react";
import {NavLink} from "react-router-dom";

import './style.scss';

const Menu = () => {
  // state = {}
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  return (
    <nav className="menu">
    <NavLink
      activeClassName="menu-link--active"
      className="menu-link"
      to="/"
      exact
    >
      About us
    </NavLink>
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
      to="/"
      exact
    >
      FAQ
    </NavLink>
    <NavLink
      activeClassName="menu-link--active"
      className="menu-link"
      to="/"
      exact
    >
      Contact us
    </NavLink>
    {/* {recipes.map((recipe) => ( */}
      {/* <NavLink
        exact
        activeClassName="menu-link--active"
        key={recipe.id}
        className="menu-link"
        to={`/recipe/${recipe.id}`}
      >
        {recipe.title}
      </NavLink> */}
    {/* ))} */}
  </nav>
  )}

export default Menu;

// Abouts us
// Our Cakes
// FAQ
// Contact Us
// <h1>Welcome to katacakes Delices !</h1>
// {/* Image */}
