import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

import placeholder from './assets/placeholder2.png';
import placeholder2 from './assets/placeholder3.png';
import { Text } from '../Text';
import { Image } from '../Image';
import SubTitle from '../SubTitle';

const BackgroundContainer = styled(Container)`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center center;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }

  > * {
    position: relative;
  }
`;

const GreenBackground = styled(Container)`
  background-color: ${({ theme }) => theme.color.green};
`;

const LeftEdgeContainer = styled(Container)`
  border-left: 10px solid ${({ theme }) => theme.color.green};
  padding-top: 2em;
  padding-bottom: 5em;
  padding-left: 10px;
`;

const AboutUs = ({ className, ...props }) => (
  <Container {...props}>
    <BackgroundContainer
      flex
      justify="center"
      align="flex-end"
      height="600px"
      className={className}
      background={placeholder}
    >
      <Container
        flex
        width="50%"
        height="auto"
        align="flex-end"
        padding={[0, 10]}
      >
        <Text white align="right" bold="bold" size={7}>
          About Us
        </Text>
        <Text white align="right" bold="light" size={2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem alias impedit, cupiditate expedita at officia.
        </Text>
      </Container>
    </BackgroundContainer>

    <LeftEdgeContainer margin={[10, 'auto', 0, 5]} width="70%">
      <Text size={8} bold="bold">
        Lorem ipsum dolor sit amet.
      </Text>
      <Text size={4}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A recusandae
        sit dolorem delectus, nemo placeat?
      </Text>
    </LeftEdgeContainer>

    <GreenBackground flex align="center" justify="center" padding={[5, 15, 2, 15]}>
      <Text size={7} white bold="lighter" align="center">
        <Text as="span" bold="bold" >Maecenas nec lacus </Text>
        mollis erat laoreet egestas. Morbi vitae blandit velit, at vehicula
        risus. Nullam bibendum eros vitae congue congue. Etiam elementum
        facilisis orci, in fermentum dolor venenatis id. Donec ac ante sem.
        Etiam fermentum tempor velit, sollicitudin imperdiet leo varius eget.
      </Text>
      <Container width="5em" height="5px" backColor="white" margin={[2, 0]} />
    </GreenBackground>

    <Image src={placeholder2} width="100%" height="700px" fit="cover" />

    <Container backColor="black" margin={[0, 10]} width="auto" style={{ top: '-3px' }} padding={[3, 5, 5, 5]}>
      <SubTitle size={3} white title="Lorem Ipsum">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nostrum fuga inventore aliquam labore dolores, nihil accusantium expedita ratione non!</SubTitle>
    </Container>
  </Container>
);

export default AboutUs;
