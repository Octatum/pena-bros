import React from 'react';
import Helmet from 'react-helmet';
import PageLayout from '../components/PageLayout';
import Services from '../components/Services';
import { useStaticQuery, graphql } from 'gatsby';

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityServicePage(title: { ne: null }) {
        title
        getAQuote
        services {
          title
          icon {
            asset {
              fixed(width: 64) {
                ...GatsbySanityImageFixed_noBase64
              }
            }
          }
          description
          serviceImage {
            asset {
              fluid(maxWidth: 1300) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <PageLayout>
      <Helmet title={data.sanityServicePage.title} />
      <Services data={data} />
    </PageLayout>
  );
};

export default ServicesPage;
