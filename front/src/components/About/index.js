import React from 'react';
import { NavLink } from 'react-router-dom';
import Page from 'src/components/Page';
import Banner from 'src/components/Banner';

import './style.scss'

const About = () => (
  <Page>
    <Banner />
    <div className="container">
      <h1>About Us- Coming soon</h1>
    </div>
  </Page>
)

export default About;
