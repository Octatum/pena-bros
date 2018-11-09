import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { Text } from '../Text';

const Quote = styled(Text)`
  align-self: flex-end;
`;

const Footer = () => (
  <Container flex>
    <Quote
      size={9}
      align="right"
      width="auto"
      as={Container}
      bold
      white
      backColor="green"
      padding={[0.1, 2, 0.1, 0.75]}
    >
      Get a quote
    </Quote>
    <Text size={4} as={Container} width="60%" margin={[1.5, 0]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Text>
  </Container>
);

export default Footer;
