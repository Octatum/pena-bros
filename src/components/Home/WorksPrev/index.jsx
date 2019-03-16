import React from 'react';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';

import ImageSlider from './ImageSlider';

import ActionButton from '../../ActionButton';
import { device } from '../../../utils/device';

const RightAlign = styled(Container)`
  align-self: flex-end;

  ${device.tablet} {
    text-align: center;
    align-self: center;
  }
`;

const Action = styled(ActionButton)`
  align-self: flex-end;

  ${device.tablet} {
    display: none;
  }
`;

const WorksPreview = ({ ...props }) => {
  const data = useStaticQuery(graphql`
    query getPrevWorks {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/ourWorks/" } }
        sort: { fields: [frontmatter___createDate], order: DESC }
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
  `);

  return (
    <Container flex width="80%" tWidth="100%" {...props}>
      <RightAlign
        as={Text}
        width="70%"
        mWidth="100%"
        tWidth="90%"
        bold="800"
        size={7}
        align="right"
        height="auto"
        padding={[0, 0, 0.5, 0]}
      >
        Lorem Ipsum is simply dummy text
      </RightAlign>
      <ImageSlider
        images={data.allMarkdownRemark.edges.map(
          data => data.node.frontmatter.allImages[0]
        )}
        margin={[0, 0, 2, 0]}
      />
      <Action name="go to our works" linkTo="our-works" width="auto" />
    </Container>
  );
};

export default WorksPreview;
