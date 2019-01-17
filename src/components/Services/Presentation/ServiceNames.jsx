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
`;

const ServiceNames = ({ icons, current, handleClick, ...props }) => (
  <Container {...props} backColor="black">
    {icons.map((icon, index) => {
      return (
        <ServiceContainer>
          <Image
            isCurrent={current === index}
            onClick={event => handleClick(event, index)}
            padding={[0.5, 1]}
            src={icon}
            key={icon}
          />
        </ServiceContainer>
      );
    })}
  </Container>
);

export default ServiceNames;
