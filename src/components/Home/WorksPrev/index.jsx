import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';

import placeholder1 from './assets/placeholder1.png';
import placeholder2 from './assets/placeholder2.png';
import placeholder3 from './assets/placeholder3.png';
import ImageSlider from './ImageSlider';

const RightALign = styled(Container)`
  align-self: flex-end;
`;

const WorksPreview = () => (
  <Container margin={[3, 0]} flex width="80%">
    <RightALign as={Text} width="50%" bold="800" size={9} align="right">
      Lorem Ipsum is simply dummy text
    </RightALign>
    <ImageSlider images={[placeholder1, placeholder2, placeholder3]} />
  </Container>
);

export default WorksPreview;
