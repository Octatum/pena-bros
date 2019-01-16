import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from './Container';
import { device } from '../utils/device';

const Circle = styled(Container)`
  border: none;
  border-radius: 50%;
`;

const ArrowRight = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 0.9em solid transparent;
  border-bottom: 0.9em solid transparent;
  left: 0.1em;
  position: relative;

  border-left: 1.5em solid ${({ theme, arrowColors }) => theme.color[arrowColors[0]]};

  ${device.tablet} {
    border-left-color: ${({ theme, arrowColors }) => theme.color[arrowColors[1]]};
  }
`;

const ArrowLeft = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 0.9em solid transparent;
  border-bottom: 0.9em solid transparent;
  left: -0.1em;
  position: relative;

  border-right: 1.5em solid ${({ theme, arrowColors }) => theme.color[arrowColors[0]]};

  ${device.tablet} {
    border-right-color: ${({ theme, arrowColors }) => theme.color[arrowColors[1]]};
  }
`;

const Arrow = ({ left, handleClick, arrowColors, ...props }) => (
  <Circle
    flex
    padding={[0.25]}
    margin={[0]}
    {...props}
    height="2.5em"
    width="2.5em"
  >
    {left ? (
      <ArrowLeft onClick={handleClick} arrowColors={arrowColors} />
    ) : (
      <ArrowRight onClick={handleClick} arrowColors={arrowColors} />
    )}
  </Circle>
);

Arrow.propTypes = {
  left: PropTypes.bool,
  handleClick: PropTypes.func,
  arrowColors: PropTypes.array,
};

Arrow.defaultProps = {
  arrowColors: ['black', 'black'],
};

export default Arrow;
