import React, { Fragment } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Text } from '../../Text';
import { device } from '../../../utils/device';

const Input = styled.input`
  font-size: ${({ size }) => size * 0.75 + 'em'};
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  max-width: 25em;
  min-width: 15em;

  ${device.tablet} {
    font-size: ${({ size }) => size * 0.5 + 'em'};
    min-width: initial;
    max-width: initial;
    width: calc(100% - 1em);
  }
`;

const Question = ({
  question,
  name,
  handleChange,
  handleBlur,
  value,
  size,
}) => (
  <Fragment>
    <Text bold="bold" size={size}>
      {question}
    </Text>
    <Input
      size={size}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      defaultValue={value}
    />
  </Fragment>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.any.isRequired,
};

export default Question;
