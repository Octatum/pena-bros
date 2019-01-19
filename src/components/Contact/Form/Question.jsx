import React, { Fragment } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Text } from '../../Text';
import { device } from '../../../utils/device';

const Input = styled.input`
  font-size: ${({ size }) => size * 0.75 + 'em'};
  border: none;
  border-bottom: 2px solid black;
  border-bottom: ${({ type }) =>
    type === 'textarea'
      ? '1px solid rgba(200, 200, 200, 0.8)'
      : '2px solid black'};
  width: 100%;
  max-width: 1000px;
  min-width: 150px;

  ${device.tablet} {
    font-size: ${({ size }) => size * 0.5 + 'em'};
    min-width: initial;
    max-width: initial;
    width: calc(100% - 1em);
    min-height: ${({ type }) => (type === 'textarea' ? '5em' : 'initial')};
  }
`;

const Question = ({
  question,
  name,
  handleChange,
  handleBlur,
  value,
  size,
  type,
}) => (
  <Fragment>
    <Text bold="bold" size={size}>
      {question}
    </Text>
    <Input
      as={type ? type : null}
      size={size}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      defaultValue={value}
      type={type}
    />
  </Fragment>
);

Question.propTypes = {
  question: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.any.isRequired,
  type: PropTypes.string,
};

Question.defaultProps = {
  type: 'input',
};

export default Question;
