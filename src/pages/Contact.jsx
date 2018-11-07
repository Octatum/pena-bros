import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';

const ContactPage = () => (
  <PageLayout>
    <Helmet title="Get Directions" />
    <Contact />
  </PageLayout>
);

export default ContactPage;
