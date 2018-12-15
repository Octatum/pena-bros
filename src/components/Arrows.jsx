import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from './Container';

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

  border-left: 1.5em solid ${({ theme, color }) => theme.color[color]};
`;

const ArrowLeft = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-top: 0.9em solid transparent;
  border-bottom: 0.9em solid transparent;
  left: -0.1em;
  position: relative;

  border-right: 1.5em solid ${({ theme, color }) => theme.color[color]};
`;

const Arrow = ({ left, handleClick, color, ...props }) => (
  <Circle
    flex
    padding={[0.25]}
    margin={[0]}
    {...props}
    height="2.5em"
    width="2.5em"
  >
    {left ? (
      <ArrowLeft onClick={handleClick} color={color} />
    ) : (
      <ArrowRight onClick={handleClick} color={color} />
    )}
  </Circle>
);

Arrow.propTypes = {
  left: PropTypes.bool,
  handleClick: PropTypes.func,
  color: PropTypes.string,
};

Arrow.defaultProps = {
  color: 'white',
};

export default Arrow;
