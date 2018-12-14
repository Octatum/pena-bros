import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';

import QuoteAction from '../components/QuoteAction';
import OurWorks from '../components/OurWorks';

const AboutPage = () => (
  <PageLayout>
    <Helmet title="Our Works" />
    <OurWorks />
    <QuoteAction />
  </PageLayout>
);

export default AboutPage;
