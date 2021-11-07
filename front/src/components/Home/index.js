import React from 'react';
import PropTypes from 'prop-types';

import Banner from 'src/components/Banner';
import Content from 'src/components/Content';

const Home = ({ cakes }) => {
  
  return (
  <div>
    <Banner />
    <Content
      title="Welcome to Kata's Cakes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      cakes={cakes}
    />
  </div>
  
)};

Home.propTypes = {
  cakes: PropTypes.array.isRequired,
  
};

export default Home;
