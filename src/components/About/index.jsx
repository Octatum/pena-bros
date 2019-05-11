import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

import placeholder from './assets/placeholder3.jpg';
import placeholder2 from './assets/placeholder2.jpg';
import { Text } from '../Text';
import { Image } from '../Image';
import SubTitle from '../SubTitle';

const BackgroundContainer = styled(Container)`
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

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

const AboutUs = ({ className, ...props }) => {
  const { data } = props;
  const { text1, text2, text3 } = data.sanityAboutPage;
  return (
    <Container {...props}>
      <BackgroundContainer
        flex
        justify="center"
        align="flex-end"
        height="300px"
        tHeight="300px"
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
        margin={[5, 'auto', 0, 5]}
        tMargin={[0]}
        tMargin={[5, 2, 0, 2]}
        width="70%"
        tWidth="auto"
      >
        <Text size={6} bold="bold">
          Peña Bros Upholstery
        </Text>
        <Text size={2}>{text1}</Text>
      </LeftEdgeContainer>

      <GreenBackground
        flex
        align="center"
        justify="center"
        padding={[3, 15, 1, 15]}
        tPadding={[5, 2.5]}
      >
        <Text size={4} white bold="lighter" align="center">
          {text2}
        </Text>
        <Container width="5em" height="5px" backColor="white" margin={[2, 0]} />
      </GreenBackground>

      <Image
        src={placeholder2}
        width="100%"
        height="400px"
        tHeight="400px"
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
        <SubTitle size={2} white title="Who are we?">
          {text3}
        </SubTitle>
      </Container>
    </Container>
  );
};
export default AboutUs;
