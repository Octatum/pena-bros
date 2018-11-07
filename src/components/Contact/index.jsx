import React from 'react';

import { Container } from '../Container';
import Map from './Map';
import BusinessInfo from './BusinessInfo';
import Form from './Form';

const Contact = () => (
  <Container flex align="flex-start">
    <Form />
    <Map />
    <BusinessInfo />
  </Container>
);

export default Contact;
