import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container';
import { Text } from '../Text';
import ActionButton from '../ActionButton';

const Quote = styled(Container)`
  align-self: flex-end;
  width: auto;
`;

const QuoteAction = ({ ...props }) => {
  return (
    <Container
      flex
      width="100%" 
      tWidth="auto"
      height="auto"
      margin={[0, 0, 5, 0]}
      tMargin={[0, 1.5, 5, 1.5]}
      {...props}
    >
      <Quote
        size={7}
        as={Text}
        bold="800"
        white
        backColor="green"
        padding={[0.1, 2, 0.1, 0.75]}
        tPadding={[0.1, 0.5, 0.1, 0.5]}
      >
        Get a quote
      </Quote>
      <Container width="auto">
        <Container
          size={3}
          as={Text}
          margin={[1.5, 0, 0, 0]}
          bold="lighter"
          height="auto"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Container>
        <ActionButton tMargin={[0.5, 0]} name="Start!" linkTo="/Contact" />
      </Container>
    </Container>
  );
};

export default QuoteAction;
