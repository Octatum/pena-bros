import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container';
import SubTitle from '../SubTitle';
import Presentation from './Presentation';

const PresentationComp = styled(Presentation)`
  min-height: 60vh;
`;

const HomePage = () => (
  <Container flex>
    <PresentationComp />
    <SubTitle
      size={2.5}
      title="Lorem Ipsum is simply dummy text"
      margin={[2, 'auto']}
      width="50%"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </SubTitle>
  </Container>
);

export default HomePage;
