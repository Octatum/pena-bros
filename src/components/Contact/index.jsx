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

const Contact = props => {
  const { getAQuote, ...rest } = props;

  return (
    <Flex pt={4} flexDirection="column">
      <Description title="Get a quote" size={2} tPadding={[0, 1]}>
        {getAQuote}
      </Description>
      <Form tPadding={[0, 1]} />
      <BusinessInfo {...rest} tPadding={[0, 1]} />
      <Map />
    </Flex>
  );
};

export default Contact;
