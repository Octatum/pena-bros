import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Text } from '../Text';
import { device } from '../../utils/device';

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

  ${device.tablet} {
    text-align: right;

    ::before {
      left: calc(100% - 0.275em);
    }
  }
`;

const Title = styled(Text)`
  ${device.tablet} {
    text-align: right;
  }
`;

const SubTitle = ({ children, title, size, edgeColor, white, ...props }) => (
  <Container flex align="flex-start" height="auto" width="auto" {...props}>
    <Title
      bold="800"
      size={size * 3}
      width="75%"
      tWidth="100%"
      white={white}
      as={Container}
      tMargin={[0, 0, 0.5, 0]}
    >
      {title}
    </Title>
    <TextGreenEdge
      size={size}
      padding={[0, 1]}
      as={Container}
      bold="lighter"
      white={white}
      edgeColor={edgeColor}
    >
      {children}
    </TextGreenEdge>
  </Container>
);

SubTitle.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  edgeColor: PropTypes.string,
  white: PropTypes.bool,
};

SubTitle.defaultProps = {
  size: 1,
  edgeColor: 'green',
  white: false,
};

export default SubTitle;
