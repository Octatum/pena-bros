import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Text } from '../../Text';

const Name = styled(Text)`
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.color.green : 'black'};
  :hover {
    background-color: ${({ theme }) => theme.color.green};
  }
`;

const ServiceNames = ({ names, current, handleClick, ...props }) => (
  <Container {...props} backColor="black">
    {names.map((name, index) => {
      return (
        <Name
          white
          isCurrent={current === index}
          onClick={event => handleClick(event, index)}
          align="center"
          bold="800"
          size={9}
          padding={[0.5, 1]}
          key={name}
        >
          {name}
        </Name>
      );
    })}
  </Container>
);

export default ServiceNames;
