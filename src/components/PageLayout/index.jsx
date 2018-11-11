import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import './layout.css';
import { globalTheme } from './Theme';
import Navbar from '../Navbar';
import LocationBanner from './../LocationBanner';

import PenaLogo from '../../assets/PenaLogo.jpg';
import { Image } from '../Image';
import { Container } from '../Container';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PageLayout = ({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <Layout>
      <Container flex row>
        <Image src={PenaLogo} width="200px" />
      </Container>
      <Navbar />
      <LocationBanner />
      <Helmet
        titleTemplate="%s | Peña Bros"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <div>{children}</div>
    </Layout>
  </ThemeProvider>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
