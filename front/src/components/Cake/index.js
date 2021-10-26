// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import Page from 'src/components/Page';

// == Composant
function Cake({ cake }) {
  if (!cake) {
    return <Redirect to="/error" />;
  }
  return (
    <div className="cake">
      <Page />
    </div>
  );
}

Cake.propTypes = {
  cake: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    season: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

  }),
};

Cake.defaultProps = {
  cake: null,
};

// == Export
export default Cake;
