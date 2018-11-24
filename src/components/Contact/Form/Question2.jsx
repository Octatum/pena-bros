import React, { Fragment } from 'react';
import styled from 'styled-components';

import FileInputButton from './FileInputButton';

import PropTypes from 'prop-types';
import { Text } from '../../Text';
import { Container } from '../../Container';

function isFile({ type }) {
  if (type === 'file') {
    return {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      cursor: 'pointer',
      margin: 0,
      'min-width': 0,
    };
  }
}

const Button = styled(FileInputButton)`
  grid-area: ${({ position }) => position};
`;

const Input = styled.input`
  font-size: 0.75em;
  border: none;
  border-bottom: 2px solid black;
  width: 100%;
  max-width: 30em;
  min-width: 15em;
  margin-left: 1em;
  grid-area: ${({ position }) => position};

  ${isFile};
`;


const Question = ({
  question,
  inputType,
  name,
  handleChange,
  handleBlur,
  value,
  gridPosition
}) => (
    <Fragment>
      <Text as="label" weight="bold" margin={[0.5, 0]} position={gridPosition}>{question}</Text>
      {inputType !== 'file' ? (
        <Input
          type={inputType}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={value}
          position={`${gridPosition}-input`}
        />
      ) : (
          <Button position={gridPosition}>
            <Input
              type={inputType}
              name={name}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={value}
            />
          </Button>
        )}
    </Fragment>
  )

Question.propTypes = {
  question: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.any.isRequired,
};

Question.defaultProps = {
  type: 'text',
};

export default Question;