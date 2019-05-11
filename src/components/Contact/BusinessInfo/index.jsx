import React from 'react';

import { Container } from '../../Container';

import BusinessCard from './BusinessCard';

import location from './../assets/loc.svg';
import phone from './../assets/phone.svg';

const BusinessInfo = props => (
  <Container
    flex
    padding={[1]}
    width="75%"
    tWidth="auto"
    margin={['auto']}
    align="flex-end"
  >
    <BusinessCard image={phone}>{props.phone}</BusinessCard>
    <BusinessCard image={location}>{props.address}</BusinessCard>
  </Container>
);

export default BusinessInfo;
