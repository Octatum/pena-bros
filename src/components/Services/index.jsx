import React, { Fragment } from 'react';
import { Container } from '../Container';
import { StaticQuery, graphql } from 'gatsby';

import QuoteAction from '../QuoteAction';
import ServicesPresentation from './Presentation';
import Comparison from './Comparison';

const Services = () => (
  <Container>
    <StaticQuery
      query={graphql`
        query getServices {
          allFile(
            filter: {
              sourceInstanceName: { eq: "services" }
              name: { ne: ".gitkeep" }
            }
          ) {
            edges {
              node {
                name
                relativePath
                childMarkdownRemark {
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
        }
      `}
      render={data => (
        <Fragment>
          <ServicesPresentation data={data.allFile.edges} />
          <Comparison height="auto" margin={[0, 0, 7, 0]} />
        </Fragment>
      )}
    />
    <QuoteAction />
  </Container>
);

export default Services;
