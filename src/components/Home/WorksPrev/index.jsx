import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';

import ImageSlider from './ImageSlider';

import ActionButton from '../../ActionButton';

const RightAlign = styled(Container)`
  align-self: flex-end;
`;

const Action = styled(ActionButton)`
  align-self: flex-end;
`;

const WorksPreview = () => (
  <Container margin={[5, 0]} flex width="80%">
    <RightAlign as={Text} width="50%" bold="800" size={9} align="right">
      Lorem Ipsum is simply dummy text
    </RightAlign>
    <StaticQuery 
      query={graphql`
        query getPrevWorks {
          allMarkdownRemark(
            filter: { fileAbsolutePath: {regex : "\/ourWorks/"} }
            sort: { fields: [frontmatter___createDate], order: DESC}
            limit: 3
          ) {
            edges {
              node {
                frontmatter {
                  allImages
                }
              }
            }
          }
        }
      `}
      render={data => (
        <ImageSlider 
          images={data.allMarkdownRemark.edges.map(data => data.node.frontmatter.allImages[0])}
          margin={[0, 0, 2, 0]}
        />
      )}
    />
    
    <Action name="go to our works" linkTo="our-works" width="auto" />
  </Container>
);

export default WorksPreview;
