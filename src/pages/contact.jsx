import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';

const ContactPage = () => (
  <PageLayout>
    <Helmet title="Contact Us" />
    <Contact />
  </PageLayout>
);

export default ContactPage;
