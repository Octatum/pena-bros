import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import Link from 'gatsby-link';
import { Container } from '../Container';
import { Text } from '../Text';

const Quote = styled(Container)`
  align-self: flex-end;
  width: auto;
  /* transition: all 0.75s ease-out 0s;

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
  } */
`;

/* const ActionLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`; */

const QuoteAction = () => (
  <Container flex height="auto">
    <Quote
      size={9}
      width="auto"
      as={Text}
      bold="800"
      white
      backColor="green"
      padding={[0.1, 2, 0.1, 0.75]}
    >
      {/* <ActionLink to="/Contact" /> */}
      Get a quote
    </Quote>
    <Container size={4} as={Text} width="60%" margin={[1.5, 0]} bold="lighter" >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Container>
  </Container>
);

export default QuoteAction;
