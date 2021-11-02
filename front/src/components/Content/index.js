import React from 'react';
import PropTypes from 'prop-types';

import Card from 'src/components/Card';

import './style.scss';

const Content = ({ title, text, cakes }) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {cakes && (
      <div className="content-list">
        {cakes.map((cake) => (
          <Card key={cake._id} {...cake} />
        ))}
      </div>
    )}
  </section>
);
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
Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cakes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  ),
};

Content.defaultProps = {
  cakes: null,
};

export default Content;
