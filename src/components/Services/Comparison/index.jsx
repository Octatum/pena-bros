import React from 'react';
import styled from 'styled-components';

import SubTitle from '../../SubTitle';
import { Container } from '../../Container';
import ActionButton from '../../ActionButton';

const Action = styled(ActionButton)`
  align-self: flex-end;
`;

const Comparison = ({ data, ...props }) => (
  <Container flex row {...props}>
    <Container flex backColor="green" padding={[3]}>
      <SubTitle title="What is Lorem Ipsum?" edgeColor="black" white size={3}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </SubTitle>
      {/* IMAGES */}
      <Action
        width="auto"
        noAnimate
        textColor="white"
        linkTo="our-works"
        name="go to our works"
      />
    </Container>
    <Container flex backColor="black" padding={[3]}>
      <SubTitle title="What is Lorem Ipsum?" edgeColor="green" white size={3}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </SubTitle>
      {/* IMAGES */}
      <Action
        width="auto"
        noAnimate
        textColor="white"
        linkTo="our-works"
        name="go to our works"
      />
    </Container>
  </Container>
);

export default Comparison;
