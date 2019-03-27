import React from 'react';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { Container } from '../../Container';
import { Image } from '../../Image';
import { Text } from '../../Text';

const ServiceContainer = styled(Container)`
  background-color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.color.green : 'black'};
  :hover {
    background-color: ${({ theme }) => theme.color.green};
  }
  cursor: pointer;
  > * {
    margin: auto;
  }
`;

const ServiceNames = ({
  icons,
  names = [],
  current,
  handleClick,
  ...props
}) => {
  return (
    <Container {...props} backColor="black">
      {icons.map((icon, index) => (
        <ServiceContainer
          flex
          padding={[2, 0]}
          height="auto"
          width="auto"
          onClick={event => handleClick(event, index)}
          isCurrent={current === index}
          key={icon.asset.fixed.src}
        >
          <Image
            as={GatsbyImage}
            fixed={icon.asset.fixed}
            width="64px"
            height="64px"
          />
          <Text white padding={[1, 0]}>
            {names[index]}
          </Text>
        </ServiceContainer>
      ))}
    </Container>
  );
};

export default ServiceNames;
