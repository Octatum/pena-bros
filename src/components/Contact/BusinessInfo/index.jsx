import React from 'react';

import { Container } from '../../Container';

import BusinessCard from './BusinessCard';

import location from './../assets/loc.svg';
import phone from './../assets/phone.svg';

const BusinessInfo = () => (
  <Container
    flex
    padding={[1]}
    width="75%"
    tWidth="auto"
    margin={['auto']}
    align="flex-end"
  >
    <BusinessCard image={phone}>(210) 647-4200</BusinessCard>
    <BusinessCard image={location}>
      5305 Bandera Road San Antonio, TX
    </BusinessCard>
  </Container>
);

export default BusinessInfo;
