import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Text } from '../../Text';
import { Container } from '../../Container';

const Input = styled.input`
  font-size: 0.75em;
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  max-width: 30em;
  min-width: 15em;
  margin-left: 1em;
`;

const Question = ({
  question,
  inputType,
  name,
  handleChange,
  handleBlur,
  value,
  error,
  ...props
}) => {
  return (
    <Text
      as={Container}
      flex
      row
      justify="space-between"
      margin={[0.5, 0]}
      bold
      {...props}
    >
      {question}
      {
        inputType !== "file" &&
        <Input
          type={inputType}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={value}
        />}
    </Text>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.any.isRequired,
  error: PropTypes.object
};

Question.defaultProps = {
  type: 'text',
};

export default Question;
