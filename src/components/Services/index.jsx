import React from 'react';
import { Container } from '../Container';
import { StaticQuery, graphql } from 'gatsby';

import QuoteAction from '../QuoteAction';
import ServicesPresentation from './Presentation';

const Services = () => (
  <Container>
    <StaticQuery
      query={graphql`
        query GetServices {
          allMarkdownRemark(
            filter: { frontmatter: { layout: { eq: "service" } } }
          ) {
            edges {
              node {
                frontmatter {
                  name
                  title
                  image
                  description
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ServicesPresentation data={data.allMarkdownRemark.edges} />
      )}
    />
    <QuoteAction />
  </Container>
);

export default Services;
