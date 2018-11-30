import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';

import placeholder1 from './assets/placeholder1.png';
import placeholder2 from './assets/placeholder2.png';
import placeholder3 from './assets/placeholder3.png';
import ImageSlider from './ImageSlider';

import ActionButton from '../../ActionButton';

const RightAlign = styled(Container)`
  align-self: flex-end;
`;

const Action = styled(ActionButton)`
  align-self: flex-end;
`;

const WorksPreview = () => (
  <Container margin={[5, 0]} flex width="80%">
    <RightAlign as={Text} width="50%" bold="800" size={9} align="right">
      Lorem Ipsum is simply dummy text
    </RightAlign>
    <ImageSlider
      images={[placeholder1, placeholder2, placeholder3]}
      margin={[0, 0, 2, 0]}
    />
    <Action name="go to our works" linkTo="our-works" width="auto" />
  </Container>
);

export default WorksPreview;
