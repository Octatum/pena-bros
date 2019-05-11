import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';
import { graphql } from 'gatsby';

const ContactPage = props => {
  const { title, ...rest } = props.data.sanityContactPage;

  return (
    <PageLayout>
      <Helmet title={title} />
      <Contact {...rest} />
    </PageLayout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    sanityContactPage {
      title
      address
      phone
      getAQuote
    }
  }
`;
