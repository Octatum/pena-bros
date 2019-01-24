import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Text } from '../../Text';

const Input = styled.input`
  font-size: ${({ size }) => size * 0.75 + 'em'};
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  cursor: pointer;
  margin: 0;
`;

const FileUpload = ({ text, message, handleChange,
  handleBlur, name, value, ...props }) => {

  return (
    <Container as={Text} flex row justify="flex-start" {...props}>
      <Container backColor="green" padding={[0.5, 1.25]} width="auto">
        <Text white bold="bold" align="center">
          {text}
        </Text>
        <Input
          accept="image/*, application/pdf"
          multiple
          type="file"
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={value}
        />
      </Container>
      <Text
        italic
        size={0.15}
        margin={[0, 5]}
        tMargin={[0.5, 0]}
        align="left"
        gray
      >
        {message}
      </Text>
    </Container>
  );
}


export default FileUpload;
