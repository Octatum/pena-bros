import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';

import QuoteAction from '../components/QuoteAction';
import About from '../components/About';

const AboutPage = () => (
  <PageLayout>
    <Helmet title="About Us" />
    <About />
    <QuoteAction />
  </PageLayout>
);

export default AboutPage;
