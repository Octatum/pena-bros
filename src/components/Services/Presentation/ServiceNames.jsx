import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Image } from '../../Image';

const ServiceContainer = styled(Container)`
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.color.green : 'black'};
  :hover {
    background-color: ${({ theme }) => theme.color.green};
  }
  > * {
    margin: auto;
  }
`;

const ServiceNames = ({ icons, current, handleClick, ...props }) => (
  <Container {...props} backColor="black">
    {icons.map((icon, index) => {
      return (
        <ServiceContainer flex padding={[2, 0]} height="auto" width="auto" onClick={event => handleClick(event, index)} isCurrent={current === index} >
          <Image
            src={icon}
            key={icon}
            width="128px"
            height="128px"
            tWidth="64px"
            tHeight="64px"
          />
        </ServiceContainer>
      );
    })}
  </Container>
);

export default ServiceNames;
