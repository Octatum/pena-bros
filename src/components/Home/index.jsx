import React from 'react';
import styled from 'styled-components';

import { Container } from '../Container';
import Presentation from './Presentation';

const PresentationComp = styled(Presentation)`
  min-height: 60vh;
`;

const HomePage = () => (
  <Container flex>
    <PresentationComp />
  </Container>
);

export default HomePage;
