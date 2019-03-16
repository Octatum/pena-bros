import React from 'react';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';

import { Container } from '../Container';
import SubTitle from '../SubTitle';
import Presentation from './Presentation';
import Quote from './Quote';
import WorksPreview from './WorksPrev';
import QuoteAction from '../QuoteAction';

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query getQuotes {
      allFile(
        filter: {
          sourceInstanceName: { eq: "reviews" }
          name: { ne: ".gitkeep" }
        }
      ) {
        edges {
          node {
            name
            relativePath
            childMarkdownRemark {
              frontmatter {
                title
                review
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Container flex height="auto">
      <Presentation margin={[0, 0, 2, 0]} />
      <SubTitle
        size={2.5}
        title="Lorem Ipsum is simply dummy text"
        margin={[2, 'auto']}
        width="75%"
        tWidth="90%"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </SubTitle>
      <Quote margin={[5, 0]} tMargin={[2, 0]} size={3} data={data} />
      <WorksPreview margin={[5, 0]} tMargin={[2, 0]} />
      <QuoteAction />
    </Container>
  );
};
export default HomePage;
