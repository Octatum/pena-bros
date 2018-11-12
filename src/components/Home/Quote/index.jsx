import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Text } from '../../Text';

import inicial from './assets/comilla_inicial.png';
import final from './assets/comilla_final.png';
import { Image } from '../../Image';

const LeftMark = styled(Image)`
  position: absolute;
  max-width: 10em;
  max-height: 60%;
  top: 0;
  left: 2em;
`;

const RightMark = styled(Image)`
  position: absolute;
  max-width: 10em;
  max-height: 50%;
  bottom: 0;
  right: 2em;
`;

const Quote = ({ author, children, size, ...props }) => (
  <Container flex row backColor="green" {...props} padding={[2, 13]}>
    <LeftMark src={inicial} />
    <Container flex justify="space-between">
      <Text white bold size={2 * size}>
        {author}
      </Text>
      <Text size={size} white align="right">
        {children}
      </Text>
    </Container>
    <RightMark src={final} />
  </Container>
);

export default Quote;
