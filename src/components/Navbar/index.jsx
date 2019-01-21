import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { withTheme } from 'styled-components';

import { Text } from '../Text';
import { Container } from '../Container';
import { device } from '../../utils/device';
import PenaLogo from '../../assets/PenaLogo.jpg';
import { Image } from '../Image';

const CollapsibleMenu = styled.div`
  display: none;

  ${device.tablet} {
    display: flex;
    background-color: ${({ theme }) => theme.color.white};
    align-self: flex-end;
    width: 100%;
    height: auto;
    padding: 0.65em 0;
  }
  ${device.mobile} {
    padding: 0.5em 0;
  }
`;
const Logo = styled(Image)`
  width: 5em;
  height: 100%;
  margin-left: 1.5em;
`;

const MenuIcon = styled.div`
  max-width: 2.75em;
  margin: auto;
  margin-right: 1.5em;
`;
const Bar = styled.div`
  width: 2.5em;
  height: 0.3em;
  background-color: ${({ theme }) => theme.color.black};

  margin: 0.5em 0;

  transition: all 0.5s ease;
`;
const Bar1 = styled(Bar)`
  transform: ${({ display }) =>
    display ? 'rotate(-45deg) translate(-0.25em, -0.2em)' : 'rotate(0deg)'};
  transform-origin: 100% 0%;
`;
const Bar2 = styled(Bar)`
  transform: ${({ display }) =>
    display ? 'rotate(180deg) scale(0)' : 'rotate(0deg)'};
  opacity: ${({ display }) => (display ? 0 : 1)};
`;
const Bar3 = styled(Bar)`
  transform: ${({ display }) =>
    display ? 'rotate(45deg) translate(-0.09em, 0.25em)' : 'rotate(0deg)'};
  transform-origin: 100% 100%;
`;

const NavbarContainer = styled(Container)`
  justify-content: space-evenly;
  position: sticky;
  top: -1px;
  z-index: 10;
  padding: 0.7em 5em;
  box-shadow: 0 5px 20px 0.5px rgba(0, 0, 0, 0.7);

  ${Text} {
    text-transform: uppercase;
    margin: 0 auto;
  }

  ${device.tablet} {
    padding: 0;
    background-color: transparent;
    flex-wrap: wrap;

    ${Text} {
      color: ${({ theme }) => theme.color.black};
      font-weight: normal;
      display: ${({ display }) => (display ? 'block' : 'none')};
      width: 50%;
      text-align: center;
      padding: 1.5em 0;
      background-color: ${({ theme }) => theme.color.white};
    }
  }
`;

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const open = this.state.isOpen ? false : true;
    this.setState({
      isOpen: open,
    });
  }

  render() {
    return (
      <NavbarContainer flex row backColor="black" display={this.state.isOpen}>
        <CollapsibleMenu onClick={this.handleClick}>
          <Logo src={PenaLogo} />
          <MenuIcon>
            <Bar1 display={this.state.isOpen} />
            <Bar2 display={this.state.isOpen} />
            <Bar3 display={this.state.isOpen} />
          </MenuIcon>
        </CollapsibleMenu>
        <Text
          as={Link}
          activeStyle={{ color: this.props.theme.color.green }}
          to="/"
          white="true"
          bold="bold"
          size={1}
        >
          Home
        </Text>
        <Text
          as={Link}
          activeStyle={{ color: this.props.theme.color.green }}
          to="/about"
          white="true"
          bold="bold"
          size={1}
        >
          About
        </Text>
        <Text
          as={Link}
          activeStyle={{ color: this.props.theme.color.green }}
          to="/Services"
          white="true"
          bold="bold"
          size={1}
        >
          Services
        </Text>
        <Text
          as={Link}
          activeStyle={{ color: this.props.theme.color.green }}
          to="/our-works"
          white="true"
          bold="bold"
          size={1}
        >
          Works
        </Text>
        <Text
          as={Link}
          activeStyle={{ color: this.props.theme.color.green }}
          to="/products"
          white="true"
          bold="bold"
          size={1}
        >
          Products
        </Text>
        <Text
          as={Link}
          activeStyle={{ color: this.props.theme.color.green }}
          to="/Contact"
          white="true"
          bold="bold"
          size={1}
        >
          Contact
        </Text>
      </NavbarContainer>
    );
  }
}

export default withTheme(Navbar);
