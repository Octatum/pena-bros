import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { Text } from '../Text';

const TextContainer = styled(Container)`
  width: 60%;
  margin: 2.5em 2em 2.5em auto;
`;

const BusinessInfo = () => (
  <Container>
    <TextContainer>
      <Text align="right" size={2.5}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
    </TextContainer>
  </Container>
)

export default BusinessInfo;