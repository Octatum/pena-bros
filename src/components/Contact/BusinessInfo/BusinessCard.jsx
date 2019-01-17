import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Image } from '../../Image';
import { device } from '../../../utils/device';

const BusinnessContainer = styled(Container)`
  ${device.tablet} {
    flex-direction: row-reverse;
    div {
      text-align: left;
    }
  }
`;

const BusinessCard = ({ image, children }) => (
  <BusinnessContainer flex row justify="flex-end" margin={[1, 0]}>
    <Text
      align="right"
      size={2.5}
      margin={[0, 2, 0, 0]}
      tMargin={[0, 0, 0, 1.25]}
    >
      {children}
    </Text>
    <Image width="3em" tWidth="1.5em" src={image} />
  </BusinnessContainer>
);

export default BusinessCard;
