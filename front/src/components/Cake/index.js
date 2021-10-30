// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
import './style.scss';
import Page from 'src/components/Page';
import Banner from 'src/components/Banner';
import Header from './Header';
import Desc from './Description';

// == Composant
function Cake({ cake }) {
  if (!cake) {
    console.log('erreur')
    // return <Redirect to="/error" />;
  }
  return (
    <Page>
      <Banner />
      <div className="cake">
        <Header
          name={cake.name}
          thumbnail={cake.thumbnail}
          season={cake.season}
        />
        <Desc
          description={cake.description}
        />
      </div>
    </Page>
  );
}

Cake.propTypes = {
  cake: PropTypes.shape({
    _id: PropTypes.string.isRequired,
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
