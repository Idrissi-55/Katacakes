// == Import : npm
import React from 'react';
import { Link, Navlink } from "react-router-dom";
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Card = ({
   _id, name, thumbnail, season
}) => (
  <article className="card">
    <img
      className="card-img"
      src={thumbnail}
      alt={name}
    />
    <div className="card-content">
      <h1 className="card-name">{name}</h1>
      <p className="card-season">Season : {season}</p>
      <Link to={`/cakes/${_id}`} className="card-link">
      See details
      </Link>
    </div>
  </article>
);

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  
};

// == Export
export default Card;

