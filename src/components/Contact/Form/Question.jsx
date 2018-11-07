import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { Text } from '../../Text';
import { Container } from '../../Container';

function isFile({ type }) {
  if (type === 'file') {
    return {
      position: 'absolute',
      height: 0,
      width: 0,
      opacity: 0,
      width: '100%',
      height: '100%',
    };
  }
}

const Input = styled.input`
  font-size: 0.75em;
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  max-width: 30em;
  min-width: 15em;
  margin-left: 1em;

  ${isFile};
`;

const FileInputButton = ({ children, ...props }) => (
  <Container flex row {...props} justify="flex-start">
    <Container green padding={[0.5]} width="40%">
      <Text white bold>
        Attach Image
      </Text>
      {children}
    </Container>
    <Container flex row>
      <Text italic size={0.25}>
        Send us a photo of your car's interior
      </Text>
    </Container>
  </Container>
);

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
      {inputType !== 'file' ? (
        <Input
          type={inputType}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={value}
        />
      ) : (
        <FileInputButton>
          <Input
            type={inputType}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={value}
          />
        </FileInputButton>
      )}
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
  error: PropTypes.object,
};

Question.defaultProps = {
  type: 'text',
};

export default Question;
