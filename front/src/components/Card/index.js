// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Card = ({
  id, name, thumbnail, season, description
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
      <p className="card-desc">{description}</p>
      <a href={`/cake/${id}`} className="card-link">See details</a>
    </div>
  </article>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  
};

// == Export
export default Card;
