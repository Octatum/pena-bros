import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import './layout.css';
import { globalTheme } from './Theme';
import Navbar from '../Navbar';
import LocationBanner from './../LocationBanner';
import { Waypoint } from 'react-waypoint';
import Footer from '../Footer';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PageLayout = ({ children }) => {
  const [isScrolled, setScrolled] = useState(false);
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <LocationBanner />
        <Navbar isScrolled={isScrolled} />
        <Helmet
          titleTemplate="%s | Peña Bros"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Waypoint
          topOffset={'20%'}
          onPositionChange={({ currentPosition }) =>
            setScrolled(currentPosition === 'above')
          }
        />
        {children}
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
