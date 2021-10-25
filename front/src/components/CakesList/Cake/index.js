// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Card = ({
  id, name, thumbnail, season
}) => (
  <article className="card">
    <img
      src={thumbnail}
      alt={name}
      className="card-image"
    />
    <div className="card-content">
      <h1 className="card-name">{name}</h1>
      <p className="card-season">Season : {season}</p>
      <p className="card-description">{description}</p>
      <a href={`/cake/${id}`} className="card-link">See details</a>
    </div>
  </article>
);

// Header.propTypes = {
//   name: PropTypes.string.isRequired,
//   thumbnail: PropTypes.string.isRequired,
//   
// };

// == Export
export default Card;
