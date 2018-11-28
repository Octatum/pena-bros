import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line
import Link from 'gatsby-link';
import { Container } from '../Container';
import { Text } from '../Text';

const Quote = styled(Container)`
  align-self: flex-end;
  width: auto;
`;

const ActionLink = styled(Text)`
  position: relative;
  display: flex;

  span {
    position: absolute;

    left: 0;
    overflow: hidden;
    width: 0;
    font-size: 1em;
    color: ${({ theme }) => theme.color.green};
    transition: all 0.45s ease-in;
    display: inline-block;
  }

  :hover {
    span {
      width: 100%;
    }
  }
`;

const ArrowLine = styled.div`
  width: 1.25em;
  height: 0.15em;
  background-color: black;
`;

const ArrowPoint = styled(Container)`
  width: 0;
  height: 0;
  border-top: 0.4em solid transparent;
  border-bottom: 0.4em solid transparent;
  position: relative;

  border-left: 0.7em solid black;
`;

const QuoteAction = () => (
  <Container flex height="auto" margin={[0, 0, 5, 0]}>
    <Quote
      size={9}
      width="auto"
      as={Text}
      bold="800"
      white
      backColor="green"
      padding={[0.1, 2, 0.1, 0.75]}
    >
      Get a quote
    </Quote>
    <Container width="auto">
      <Container
        size={4}
        as={Text}
        margin={[1.5, 0, 0, 0]}
        bold="lighter"
        height="auto"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Container>
      <Container flex row justify="flex-start" align="center" height="auto">
        <ActionLink to="/Contact" as={Link} bold="bolder" size={2.5}>
          Start!
          <span>Start!</span>
        </ActionLink>

        <Container flex row justify="flex-start" margin={[0, 0.5]}>
          <ArrowLine />
          <ArrowPoint />
        </Container>
      </Container>
    </Container>
  </Container>
);

export default QuoteAction;
