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
        as="span"
        white
        onClick={() => {
          window.open(`tel:2106474200`);
        }}
        style={{cursor:'pointer', textDecoration:'underline'}}
      >
        (210) 647-4200
      </Text>
      <Text as="span" white bold="bold">
        {' '}We are located at:{' '}
      </Text>
      <Text
        as="span"
        white
        onClick={() => {
          window.open('https://goo.gl/maps/U2PqXeHfHcJ2', '_blank');
        }}
        style={{cursor:'pointer', textDecoration:'underline'}}
      >
        5305 Bandera Rd, San Antonio, TX 78238, USA
      </Text>
      <Text 
        as="span" 
        white 
        bold="bold"
        onClick={() => {
          window.open('https://goo.gl/maps/U2PqXeHfHcJ2', '_blank');
        }}
        style={{cursor:'pointer'}}
      >
        {' '}Click here{' '}
      </Text>
    </Text>
  </Container>
);

export default Banner;
