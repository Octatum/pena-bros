import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/PageLayout';
import Home from '../components/Home';

const IndexPage = () => (
  <Layout>
    <Helmet title="Home" />
    <Home />
  </Layout>
);

export default IndexPage;
