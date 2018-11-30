import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { Container } from './Container';
import { Text } from './Text';

const ActionLink = styled(Text)`
  position: relative;
  display: flex;

  span {
    position: absolute;

    left: 0;
    overflow: hidden;
    height: 100%;
    width: 0;
    font-size: 1em;
    color: ${({ theme }) => theme.color.green};
    transition: all 0.5s ease-in;
    display: inline-block;
  }

  :hover {
    span {
      width: ${({ animate }) => (animate ? 0 : 100)}%;
    }
  }
`;

const ArrowLine = styled.div`
  width: 1.25em;
  height: 0.15em;
  background-color: ${({ white }) => (white ? 'white' : 'black')};
`;

const ArrowPoint = styled(Container)`
  width: 0;
  height: 0;
  border-top: 0.4em solid transparent;
  border-bottom: 0.4em solid transparent;
  position: relative;

  border-left: 0.7em solid ${({ white }) => (white ? 'white' : 'black')};
`;

const ActionButton = ({ linkTo, name, textColor, noAnimate, ...props }) => (
  <Container
    flex
    row
    justify="flex-start"
    align="center"
    height="auto"
    {...props}
  >
    <ActionLink
      to={linkTo}
      as={Link}
      animate={noAnimate}
      white={textColor === 'white'}
      bold="bolder"
      size={2.5}
    >
      {name}
      <span>{name}</span>
    </ActionLink>
    <Container
      flex
      row
      justify="flex-start"
      margin={[0, 0.5]}
      width="auto"
      height="1em"
    >
      <ArrowLine white={textColor === 'white'} />
      <ArrowPoint white={textColor === 'white'} />
    </Container>
  </Container>
);

ActionButton.propTypes = {
  linkTo: PropTypes.string,
  name: PropTypes.string,
  textColor: PropTypes.string,
  noAnimate: PropTypes.bool,
};

ActionButton.defaultProps = {
  textColor: 'black',
  noAnimate: false,
};

export default ActionButton;
