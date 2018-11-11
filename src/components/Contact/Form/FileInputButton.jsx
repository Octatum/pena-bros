import React from 'react';

import { Text } from '../../Text';
import { Container } from '../../Container';

const FileInputButton = ({ children, ...props }) => (
  <Container flex row {...props} justify="flex-start">
    <Container backColor="green" padding={[0.5, 1.25]} width="auto">
      <Text white bold align="center">
        Attach Image
      </Text>
      {children}
    </Container>
    <Container margin={[0, 1.5]} width="auto">
      <Text italic size={0.25} align="left">
        Send us a photo of your car's interior
      </Text>
    </Container>
  </Container>
);

export default FileInputButton;
