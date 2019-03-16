import React from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import { Text } from '../../Text';
import { Image } from '../../Image';
import { device } from '../../../utils/device';
import { Box } from '@rebass/grid';

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
    <Box pr={3}>
      <Text align="right" size={1}>
        {children}
      </Text>
    </Box>
    <Image width="2em" tWidth="1.5em" src={image} />
  </BusinnessContainer>
);

export default BusinessCard;
