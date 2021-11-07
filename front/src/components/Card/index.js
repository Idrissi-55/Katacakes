// == Import : npm
import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

// == Import : local
import './style.scss';


// == Composant
const Card = ({
   _id, name, thumbnail, season
}) => {
  let history = useHistory();
  function handleClick () {
    history.push(`/cakes/${_id}`)
  }
  return (
  
  <div className="card">
    <img
      className="card-img"
      src={thumbnail}
      alt={name}
    />
    <div className="card-content">
      <h1 className="card-name">{name}</h1>
      <p className="card-season">Season : {season}</p>
      <a href={`/cakes/${_id}`} className="card-link" onClick={handleClick}>
      See details
      </a>
    </div>
  </div>
)};

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
  
  
};

// == Export
export default Card;

