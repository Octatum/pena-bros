import React from 'react';

import { Container } from '../Container';
import { Text } from '../Text';
import { Image } from '../Image';

import location from './assets/location.png';
import mail from './assets/mail.png';
import phone from './assets/phone.png';

const BusinessInfo = () => (
  <Container padding={[2, 1]}>
    <Container flex margin={[0, 0, 0, 'auto']}>
      <Container flex row>
        <Text align="right" size={2.5}>
          (210) 647-4200
        </Text>
        <Image src={phone} width="40px" />
      </Container>
      <Container flex row>
        <Text align="right" size={2.5}>
          (210) 647-4200
        </Text>
        <Image src={location} width="40px" />
      </Container>
      <Container flex row>
        <Text align="right" size={2.5}>
          (210) 647-4200
        </Text>
        <Image src={mail} width="40px" />
      </Container>
    </Container>
  </Container>
);

export default BusinessInfo;
