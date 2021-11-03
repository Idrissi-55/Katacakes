// == Import : npm
import React from 'react';
import { Link, Navlink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect } from 'react';

// == Import : local
import './style.scss';
import { saveID } from '../../actions/cakes';

// == Composant
const Card = ({
   name, thumbnail, season, idCake, onClick,saveID
}) => {
  return (
  <article className="card">
    <img
      className="card-img"
      src={thumbnail}
      alt={name}
    />
    <div className="card-content">
      <h1 className="card-name">{name}</h1>
      <p className="card-season">Season : {season}</p>
      <Link to={`/cakes/${idCake}`} className="card-link" event={saveID(idCake)}>
      See details
      </Link>
    </div>
  </article>
)};

Card.propTypes = {
  // idCake: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  saveID: PropTypes.func.isRequired,
  
};

// == Export
export default Card;

