// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Header = ({
  name, thumbnail, season
}) => (
  <header className="presentation">
    <img
      src={thumbnail}
      alt="Cakes"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">{name}</h1>
      <p className="presentation-season">Season - {season}</p>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  season: PropTypes.string.isRequired,
};

// == Export
export default 
Header;
