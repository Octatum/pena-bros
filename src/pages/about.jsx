import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';

import QuoteAction from '../components/QuoteAction';
import About from '../components/About/index2';

const AboutPage = () => (
  <PageLayout>
    <Helmet title="About Us" />
    <About margin={[0, 0, 5, 0]} />
    <QuoteAction />
  </PageLayout>
);

export default AboutPage;
