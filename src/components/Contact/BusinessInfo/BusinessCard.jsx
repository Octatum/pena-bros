import React from 'react';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Image } from '../../Image';

const BusinessCard = ({ image, children }) => (
  <Container flex row justify="flex-end">
    <Text align="right" size={2.5} margin={[0, 2, 0, 0]}>
      {children}
    </Text>
    <Image src={image} width="40px" />
  </Container>
)

export default BusinessCard;