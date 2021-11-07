import React from 'react';


import Banner from 'src/components/Banner';
import Content from 'src/components/Content';

const Error = () => (
  <div>

    <Banner />
    <Content
      title="Erreur"
      text="Nous sommes désolé, Une erreur s'est produite."
    />
  </div>

);

export default Error;
