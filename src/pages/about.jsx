import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';

import QuoteAction from '../components/QuoteAction';
import About from '../components/About';
import { graphql } from 'gatsby';

const AboutPage = props => {
  const { title, getAQuote } = props.data.sanityAboutPage;
  return (
    <PageLayout>
      <Helmet title={title} />
      <About {...props} margin={[0, 0, 5, 0]} />
      <QuoteAction quote={getAQuote} />
    </PageLayout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    sanityAboutPage(title: { ne: null }) {
      title
      text1
      text2
      text3
      getAQuote
    }
  }
`;
