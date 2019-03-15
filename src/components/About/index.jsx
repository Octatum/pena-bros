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
  background-size: 100% 100%;
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
  padding-top: 1em;
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
      tHeight="400px"
      className={className}
      background={placeholder}
    >
      <Container
        flex
        width="50%"
        tWidth="70%"
        height="auto"
        align="flex-end"
        padding={[0, 10]}
        tPadding={[0]}
        tMargin={['auto', 2.5, 2.5, 2.5]}
      >
        <Text white align="right" bold="bold" size={7}>
          About Us
        </Text>
        <Text white align="right" bold="light" size={2}>
          What is Peña Bros?
        </Text>
      </Container>
    </BackgroundContainer>

    <LeftEdgeContainer
      margin={[10, 'auto', 0, 5]}
      tMargin={[0]}
      tMargin={[5, 2, 0, 2]}
      width="70%"
      tWidth="auto"
    >
      <Text size={8} bold="bold">
        Peña Bros Upholstery
      </Text>
      <Text size={4}>
        Peña Brothers Upholstery was established in 1986 by Rudy G. Peña as a
        family upholstery business. We have had many successful years in the
        automotive interior business in Leon Valley Texas.
        <br />
        We are now in our thirty second year and are training the next
        generation of professional Automotive upholsters that will continue our
        proud tradition of top-quality workmanship, at reasonable pricing.
      </Text>
    </LeftEdgeContainer>

    <GreenBackground
      flex
      align="center"
      justify="center"
      padding={[5, 15, 2, 15]}
      tPadding={[5, 2.5]}
    >
      <Text size={7} white bold="lighter" align="center">
        <Text as="span" bold="bold">
          Pena Bros. Upholstery Co. &nbsp;
        </Text>
        is recognized by leaders and business shop owners throughout south Texas
        as the number one Auto Interior shop. We’re a preferred repair shop for
        just about all new and used car dealerships, professional body shops and
        insurance companies.
      </Text>
      <Container width="5em" height="5px" backColor="white" margin={[2, 0]} />
    </GreenBackground>

    <Image
      src={placeholder2}
      width="100%"
      height="700px"
      tHeight="500px"
      fit="cover"
    />

    <Container
      backColor="black"
      margin={[0, 10]}
      tMargin={[0]}
      width="auto"
      style={{ top: '-3px' }}
      padding={[3, 5, 5, 5]}
      tPadding={[3.5, 2]}
    >
      <SubTitle size={3} white title="Who are we?">
        Pena Brothers is owned and managed by Rudy G. Pena- President, his son
        Rudy “Steven” Pena Sales Manager, Brother Roy G. Pena shop supervisor
        and Quality control, Ms. Diana Estrada business office manager. The
        production staff consists of Mr. Hugo Martinez- upholsterer, Armando
        Salazar - interior trimmer, Jazzy Torrez- interior trimmer, Joe Ramirez-
        upholsterer and Mr. Pablo “Picasso” Preciado-Upholster/Convertible top &
        custom interior designer.
      </SubTitle>
    </Container>
  </Container>
);

export default AboutUs;
