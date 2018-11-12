import React from 'react';
import styled from 'styled-components';

import Link from 'gatsby-link';
import { Container } from '../Container';
import { Text } from '../Text';

const Quote = styled(Text)`
  align-self: flex-end;
  transition: all 0.75s ease-out 0s;

  &::after {
    content: '';
    position: absolute;
    transition: all 0.75s ease-out 0s;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;

    background-color: ${({ theme }) => theme.color.green};
  }
  &:hover,
  &:focus {
    background-color: transparent;

    ::after {
      right: 0;
    }
  }
`;

const ActionLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const QuoteAction = () => (
  <Container flex>
    <Quote
      size={9}
      width="auto"
      as={Container}
      bold
      white
      backColor="green"
      padding={[0.1, 2, 0.1, 0.75]}
    >
      <ActionLink to="/Contact" />
      Get a quote
    </Quote>
    <Text size={4} as={Container} width="60%" margin={[1.5, 0]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Text>
  </Container>
);

export default QuoteAction;
