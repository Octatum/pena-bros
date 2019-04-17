import React from 'react';
import { Container } from '../Container';
import { Text } from '../Text';

const Banner = () => (
  <Container backColor="green" flex padding={[1]}>
    <Text align="center">
      <Text as="span" white bold="bold">
        Call Us Today!{' '}
      </Text>
      <Text
        as="a"
        white
        target="_blank"
        href="tel:2106474200"
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline' }}
      >
        (210) 647-4200
      </Text>
      <Text as="span" white bold="bold">
        {' '}
        We are located at:{' '}
      </Text>
      <Text
        as="a"
        white
        target="_blank"
        href="https://goo.gl/maps/U2PqXeHfHcJ2"
        rel="noopener noreferrer"
        style={{ textDecoration: 'underline' }}
      >
        5305 Bandera Rd, San Antonio, TX
      </Text>
    </Text>
  </Container>
);

export default Banner;
