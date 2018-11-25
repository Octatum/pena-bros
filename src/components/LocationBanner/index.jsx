import React from 'react';
import { Container } from '../Container';
import { Text } from '../Text';

const Banner = () => (
  <Container backColor="black" flex padding={[1]}>
    <Text white size={2.5}>
      <Text as="span" white bold="bold">
        Call Us Today!{' '}
      </Text>
      <Text
        as="span"
        white
        onClick={() => {
          window.open(`tel:2106474200`);
        }}
      >
        (210) 647-4200
      </Text>
      <Text as="span" white bold="bold">
        {' '}
        We are located at:{' '}
      </Text>
      <Text
        white
        as="span"
        onClick={() => {
          window.open('https://goo.gl/maps/U2PqXeHfHcJ2', '_blank');
        }}
      >
        5305 Bandera Rd, San Antonio, TX 78238, USA
      </Text>
    </Text>
  </Container>
);

export default Banner;
