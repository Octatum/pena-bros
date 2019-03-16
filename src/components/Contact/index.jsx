import React from 'react';
import styled from 'styled-components';

import Map from './Map';
import BusinessInfo from './BusinessInfo';
import Form from './Form';
import SubTitle from './../SubTitle';
import { device } from '../../utils/device';
import { Flex } from '@rebass/grid';

const Description = styled(SubTitle)`
  width: 60%;
  left: 15em;

  ${device.tablet} {
    width: 100%;
    left: initial;
  }
`;

const Contact = () => (
  <Flex pt={4} flexDirection="column">
    <Description title="Get a quote" size={2} tPadding={[0, 1]}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Description>
    <Form tPadding={[0, 1]} />
    <BusinessInfo tPadding={[0, 1]} />
    <Map />
  </Flex>
);

export default Contact;
