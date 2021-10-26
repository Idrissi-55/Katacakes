import React from 'react';

import Page from 'src/components/Page';
import Banner from 'src/components/Banner';
import Content from 'src/components/Content';

const Error = () => (
  <Page>
    <Banner />
    <Content
      title="Erreur"
      text="Nous sommes désolé, Une erreur s'est produite."
    />
  </Page>
);

export default Error;
