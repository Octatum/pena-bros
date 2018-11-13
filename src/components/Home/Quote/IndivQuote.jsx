import React from 'react';
import styled from 'styled-components';

import inicial from './assets/initial.svg';
import final from './assets/final.svg';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Image } from '../../Image';

const LeftMark = styled(Image)`
  align-self: flex-start;
`;

const RightMark = styled(Image)`
  align-self: flex-end;
`;

const Quote = ({ author, children, size, ...props }) => (
  <Container flex row backColor="green" {...props}>
    <LeftMark src={inicial} />
    <Container flex justify="space-between" margin={[1.5, 1]}>
      <Text white bold="800" size={2 * size} margin={[0, 0, 0.5, 0]}>
        {author}
      </Text>
      <Container
        size={size}
        as={Text}
        white
        align="right"
        width="90%"
        bold="lighter"
      >
        {children}
      </Container>
    </Container>
    <RightMark src={final} />
  </Container>
);

export default Quote;
