import React from 'react';
import { Container } from '../Container';
import { Text } from '../Text';

const Banner = () => (
  <Container backColor="black" flex padding={[1]}>
    <Text white size={2.5}>
      <Text as="span" white bold>Call Us Today! </Text>
      (210) 647-4200
      <Text as="span" white bold> We are located at: </Text>
      5305 Bandera Rd, San Antonio, TX 78238, USA
    </Text>
  </Container>
)

export default Banner;