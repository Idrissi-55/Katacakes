// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// == Import : local
import './style.scss';
import Page from 'src/components/Page';
import Banner from 'src/components/Banner';
import Header from './Header';
import Desc from './Description';
import {fetchCake} from '../../actions/cakes';

// == Composant
function Cake({ cake, fetchCake }) {
  useEffect(() => { fetchCake(), [] })
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
          idCake={cake._id}

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
  fetchEvent: PropTypes.func.isRequired,
};

Cake.defaultProps = {
  cake: null,
};

// == Export
export default Cake;
