import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Text } from '../Text';
import { Container } from '../Container';

const NavbarContainer = styled(Container)`
  flex-direction: row;
  justify-content: space-around;
  position: sticky;

  ${Text} {
    text-transform: uppercase;
  }
`;

const Navbar = () => (
  <NavbarContainer flex green> 
    <Text as={Link} to="/" white="true" bold="true" size={1.5}>Home</Text>
    <Text as={Link} to="/" white="true" bold="true" size={1.5}>About</Text>
    <Text as={Link} to="/Services" white="true" bold="true" size={1.5}>Services</Text>
    <Text as={Link} to="/Services" white="true" bold="true" size={1.5}>the Shop</Text>
    <Text as={Link} to="/Services" white="true" bold="true" size={1.5}>Products</Text>
    <Text as={Link} to="/Services" white="true" bold="true" size={1.5}>Gallery</Text>
    <Text as={Link} to="/Contact" white="true" bold="true" size={1.5}>Get Directions</Text>

  </NavbarContainer>
)

export default Navbar;