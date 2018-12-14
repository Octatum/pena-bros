import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Text } from '../components/Text';

const IndivWork = (props) => (
  <Container>
    <Text>{props.title}</Text>
    <Text>{props.description}</Text>
  </Container>
)

export default IndivWork;