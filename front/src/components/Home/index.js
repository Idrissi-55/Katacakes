import React from 'react';
import PropTypes from 'prop-types';

import Page from 'src/components/Page';
import Banner from 'src/components/Banner';
import Content from 'src/components/Content';

const Home = ({ cakes }) => (
  <Page>
    <Banner />
    <Content
      title="Welcome to Kata's Cakes"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      cakes={cakes}
    />
  </Page>
);

Home.propTypes = {
  cakes: PropTypes.array.isRequired,
};

export default Home;
