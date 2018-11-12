import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Text } from '../../Text';

import inicial from './assets/initial.svg';
import final from './assets/final.svg';
import { Image } from '../../Image';

const LeftMark = styled(Image)`
  position: absolute;
  max-height: 60%;
  top: 0;
  left: 2em;
`;

const RightMark = styled(Image)`
  position: absolute;
  max-height: 50%;
  bottom: 0;
  right: 2em;
`;

const Quote = ({ author, children, size, ...props }) => (
  <Container flex row backColor="green" {...props} padding={[2, 13]}>
    <LeftMark src={inicial} />
    <Container flex justify="space-between">
      <Text white bold="800" size={2 * size} margin={[0, 0, 0.5, 0]}>
        {author}
      </Text>
      <Text
        size={size}
        as={Container}
        white
        align="right"
        width="90%"
        bold="lighter"
      >
        {children}
      </Text>
    </Container>
    <RightMark src={final} />
  </Container>
);

export default Quote;
