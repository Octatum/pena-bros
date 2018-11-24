import React from 'react';

import { Container } from '../../Container';

import BusinessCard from './BusinessCard';

import location from './../assets/loc.svg';
//import mail from './../assets/mail.png';
import phone from './../assets/phone.svg';

const BusinessInfo = () => (
  <Container flex padding={[2, 1]} width="75%" margin={['auto']}>
    <BusinessCard image={phone}>(210) 647-4200</BusinessCard>
    <BusinessCard image={location} >
      5305 Bandera Road San Antonio, TX 78238
    </BusinessCard>
  </Container>
);

export default BusinessInfo;
