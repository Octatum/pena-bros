import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../Container';

const Circle = styled(Container)`
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 0.9em solid transparent;
  border-bottom: 0.9em solid transparent;
  left: 0.1em;
  position: relative;

  border-left: 1.5em solid white;
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 0.9em solid transparent;
  border-bottom: 0.9em solid transparent;
  left: -0.1em;
  position: relative;

  border-right: 1.5em solid white;
`;

const Arrow = ({ left, handleClick }) => (
  <Circle
    flex
    padding={[0.25]}
    margin={[0]}
    height="2.5em"
    width="2.5em"
    onClick={handleClick}
  >
    {left ? <ArrowLeft /> : <ArrowRight />}
  </Circle>
);

Arrow.propTypes = {
  left: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Arrow;
