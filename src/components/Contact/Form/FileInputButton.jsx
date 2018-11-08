import React from 'react';

import { Text } from '../../Text';
import { Container } from '../../Container';

const FileInputButton = ({ children, ...props }) => (
  <Container flex row {...props} justify="flex-start">
    <Container backColor='green' padding={[0.5]} width="40%">
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

export default FileInputButton;