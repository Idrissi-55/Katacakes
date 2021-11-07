// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
const Desc = ({description}) => {
  return (
    <div className="description">
      <p>{description}</p>;
    </div>
  );

}

Desc.propTypes = {
  description: PropTypes.string.isRequired,
  
};

// == Export
export default Desc;
