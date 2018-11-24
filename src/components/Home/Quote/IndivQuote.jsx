import React from 'react';

import { Container } from '../../Container';
import { Text } from '../../Text';

const Quote = ({ author, children, size, ...props }) => (
  <Container {...props} flex>
    <Container flex justify="space-between" padding={[1.5, 2]} width="calc(100% - 25em)">
      <Text white bold="800" size={2 * size} margin={[0, 0, 0.5, 0]}>
        {author}
      </Text>
      <Container
        size={size}
        as={Text}
        white
        align="right"
        bold="lighter"
      >
        {children}
      </Container>

    </Container>
  </Container>
);

export default Quote;
