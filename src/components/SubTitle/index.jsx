import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Text } from '../Text';

const TextGreenEdge = styled(Text)`
  ::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 0.275em;
    left: 0;
    top: 0;
    background-color: ${({ theme, edgeColor }) => theme.color[edgeColor]};
  }
`;

const SubTitle = ({ children, title, size, edgeColor, ...props }) => (
  <Container flex align="flex-start" height="auto" width="auto" {...props}>
    <Text bold="800" size={size * 3} width="85%">
      {title}
    </Text>
    <TextGreenEdge size={size} padding={[0, 1]} as={Container} bold="lighter" edgeColor={edgeColor} >
      {children}
    </TextGreenEdge>
  </Container>
);

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
  edgeColor: PropTypes.string,
};

SubTitle.defaultProps = {
  size: 1,
  edgeColor: 'green'
}

export default SubTitle;
