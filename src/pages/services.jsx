import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';
import Services from '../components/Services';

const ServicesPage = () => (
  <PageLayout>
    <Helmet title="Services" />
    <Services />
  </PageLayout>
);

export default ServicesPage;
