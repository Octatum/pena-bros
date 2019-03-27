import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import GatsbyLink from 'gatsby-link';

import { Container } from '../../Container';
import Image from 'gatsby-image';
import { Text } from '../../Text';
import ActionButton from '../../ActionButton';
import { device } from '../../../utils/device';
import { cleanString } from '../../../utils/lib';

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

const WorksPreview = props => {
  const { works } = props;

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

      <Flex style={{ width: '100%' }} justifyContent="space-between">
        {works.map(data => {
          const cleanTitle = cleanString(data.title);
          const cleanCategory = cleanString(data.category);
          return (
            <Box
              width={0.3}
              as={GatsbyLink}
              to={`/our-works/works/${cleanCategory}/${cleanTitle}`}
            >
              <Image fluid={data.cover.asset.fluid} style={{ width: '100%' }} />
            </Box>
          );
        })}
      </Flex>
      <Action name="go to our works" linkTo="our-works" width="auto" />
    </Container>
  );
};

export default WorksPreview;
