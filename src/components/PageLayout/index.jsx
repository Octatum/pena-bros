import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import './layout.css';
import { globalTheme } from './Theme';
import Navbar from '../Navbar';
import LocationBanner from './../LocationBanner';
import { Waypoint } from 'react-waypoint';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PageLayout = ({ children }) => {
  const [isScrolled, setScrolled] = useState(false)
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <LocationBanner />
        <Navbar isScrolled={isScrolled}/>
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
        <Waypoint onPositionChange={({ currentPosition }) => currentPosition === 'above' ? setScrolled(true) : setScrolled(false)}/>
          <div>{children}</div>
        
      </Layout>
    </ThemeProvider>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
