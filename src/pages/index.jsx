import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/PageLayout';
import Home from '../components/Home';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      sanityHomePage(subtext1: { ne: null }) {
        id
        homeSlideshow {
          slides {
            image {
              asset {
                fluid(maxWidth: 1500) {
                  src
                }
              }
            }
            description
          }
        }

        subtext1
        subtext2

        customerReviews {
          name
          review
        }

        works {
          title
          category
          cover {
            asset {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
        }

        quote
      }
    }
  `);

  console.log({ data });

  return (
    <Layout>
      <Helmet title="Home" />
      <Home data={data.sanityHomePage} />
    </Layout>
  );
};

export default IndexPage;
