import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Text } from '../../Text';

const Author = styled(Text)`
  width: 20%;
`;

const Texto = styled(Text)`
  line-height: 1.5em;
  align-self: flex-end;
  width: 70%;
`;

const Quote = ({ author, children, size, ...props }) => (
  <Container flex row backColor="green" {...props} justify="space-between">
    <Author bold size={2 * size}>
      {author}
    </Author>
    <Texto size={size} white align="right">
      <Text as="span" white bold size={size * 1.05}>
        "
      </Text>
      {children}
      <Text as="span" white bold size={size * 1.05}>
        "
      </Text>
    </Texto>
  </Container>
);

export default Quote;
