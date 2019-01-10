import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Layout from '../components/PageLayout';

import { Text } from '../components/Text';
import { Container } from '../components/Container';
import { Image } from '../components/Image';

import stop from '../assets/stop.svg';
import { device } from '../utils/device';

const BottomCont = styled(Container)`
  margin-top: 10%;
  margin-bottom: 10%;

  ${Image} {
    margin-bottom: 3em;
  }

  ${device.tablet} {
    ${Image} {
      width: 10em;
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404 Page Not Found" />
    <BottomCont flex>
      <Image src={stop} width="17em" />
      <Text bold="800" size={9} align="center">
        We are under construction
      </Text>
      <Text bold="800" size={7} align="center">
        Thanks for your patience
      </Text>
    </BottomCont>
  </Layout>
);

export default NotFoundPage;
