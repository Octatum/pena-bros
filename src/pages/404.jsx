import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/PageLayout';
import styled from 'styled-components';
import { Text } from '../components/Text';
import { Container } from '../components/Container';

const BottomCont = styled(Container)`
  margin-top: 10%;
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404 Page Not Found" />
    <BottomCont flex height="100%">
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
