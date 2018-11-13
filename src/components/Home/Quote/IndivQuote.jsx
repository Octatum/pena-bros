import React from 'react';
import styled from 'styled-components';

import inicial from './assets/initial.svg';
import final from './assets/final.svg';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Image } from '../../Image';

const QuoteContainer = styled(Container)`
  display: ${({ isCurrent }) => isCurrent ? 'flex' : 'none'};

  /* ${({ isNext }) => {
    if (isNext) {
      return {
        display: 'flex',
        bottom: 0,
        left: '100%'
      }
    }
  }} */
`;

const LeftMark = styled(Image)`
  align-self: flex-start;
`;

const RightMark = styled(Image)`
  align-self: flex-end;
`;

const Quote = ({ author, children, size, isCurrent, isNext, ...props }) => (
  <QuoteContainer flex row backColor="green" {...props} isCurrent={isCurrent} isNext={isNext}>
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
  </QuoteContainer>
);

export default Quote;
