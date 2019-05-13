import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Products from '../components/Products';
import QuoteAction from '../components/QuoteAction';

const ProductPage = props => {
  const { title, products, getAQuote } = props.data.sanityProductsPage;
  return (
    <PageLayout>
      <Helmet title={title} />
      <Products data={products} />
      <QuoteAction quote={getAQuote} />
    </PageLayout>
  );
};

export default ProductPage;

export const query = graphql`
  query getAllProducts {
    sanityProductsPage(title: { ne: null }) {
      title
      products {
        description
        name
        logo {
          asset {
            fixed(width: 150) {
              ...GatsbySanityImageFixed_noBase64
            }
          }
        }
        image {
          asset {
            fluid(maxWidth: 1000, maxHeight: 500) {
              ...GatsbySanityImageFluid_noBase64
            }
          }
        }
      }
      getAQuote
    }
  }
`;
