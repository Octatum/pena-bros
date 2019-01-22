import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { device } from '../../../utils/device';

const LeftAlignMobile = styled(Text)`
  ${device.tablet} {
    align-self: flex-start;
  }
`;

const Quote = ({ author, children, size, width, tWidth, ...props }) => (
  <Container {...props} flex>
    <Container
      flex
      justify="flex-start"
      padding={[1.5, 2]}
      width={width}
      tWidth={tWidth}
    >
      <LeftAlignMobile white bold="800" size={2 * size} margin={[0, 0, 0.5, 0]}>
        {author}
      </LeftAlignMobile>
      <Container size={size} as={Text} white align="right" bold="lighter">
        {children}
      </Container>
    </Container>
  </Container>
);

export default Quote;
