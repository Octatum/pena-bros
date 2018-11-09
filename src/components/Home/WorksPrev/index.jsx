import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';

import placeholder1 from './assets/placeholder1.png';
import placeholder2 from './assets/placeholder2.png';
import placeholder3 from './assets/placeholder3.png';
import ImageSlider from './ImageSlider';

const RightALign = styled(Text)`
  align-self: flex-end;
`;

const WorksPreview = () => (
  <Container padding={[3, 0]} flex>
    <RightALign
      as={Container}
      width="50%"
      bold
      size={9}
      padding={[0, 2, 0, 0]}
      align="right"
    >
      Lorem Ipsum is simply dummy text
    </RightALign>
    <ImageSlider images={[placeholder1, placeholder2, placeholder3]} />
  </Container>
);

export default WorksPreview;
