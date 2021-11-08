// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';

// == Import : local
import './style.scss';
import Banner from 'src/components/Banner';
import Header from './Header';
import Desc from './Description';


// == Composant
function Cake({ cake }) {
  
  if (!cake) {
    console.log('Unable to fetch the cake')
    // return <Redirect to="/error" />;
  }
  return (
    <div>
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
