import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Products from '../components/Products';
import QuoteAction from '../components/QuoteAction';

const ProductPage = props => {
  return (
    <PageLayout>
      <Helmet title="Our Products" />
      <Products data={props.data} />
      <QuoteAction />
    </PageLayout>
  );
};

export default ProductPage;

export const query = graphql`
  query getAllProducts {
    allSanityProducts {
      edges {
        node {
          id
          logo {
            asset {
              fixed(width: 150) {
                ...GatsbySanityImageFixed_noBase64
              }
            }
          }
          productDescription
          productImage {
            asset {
              fluid(maxWidth: 1000, maxHeight: 500) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          productName
        }
      }
    }
  }
`;
