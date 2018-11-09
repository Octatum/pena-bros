import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Image } from '../../Image';

const ImageMarg = styled(Image)`
  margin-left: 2em;
`;

const BusinessCard = ({ image, children }) => (
  <Container flex row justify="flex-end" margin={[1, 0]}>
    <Text align="right" size={2.5} margin={[0, 2, 0, 0]}>
      {children}
    </Text>
    <ImageMarg src={image} width="40px" />
  </Container>
);

export default BusinessCard;
