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

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const ImageComp = styled(Image)`
  margin: 0 auto;
`;

const PageLayout = ({ children }) => (
  <ThemeProvider theme={globalTheme}>
    <Layout>
      <ImageComp src={PenaLogo} width="200px" tWidth="150px" />
      <LocationBanner />
      <Navbar />
      <Helmet
        titleTemplate="%s | Peña Bros"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
        <link
          href="https://fastcdn.org/Glide.js/2.0.4/css/glide.core.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <div>{children}</div>
    </Layout>
  </ThemeProvider>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
