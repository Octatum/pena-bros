import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import { Container } from '../../Container';
import { Image } from '../../Image';
import { Text } from '../../Text';

import Arrows from './Arrows';

import placeholder from './assets/placeholder.png';
import placeholder2 from './assets/placeholder2.png';
import placeholder3 from './assets/placeholder3.png';

const BackImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const Button = styled(Text)`
  background-color: ${({ theme }) => theme.color.green};
`;

const ArrowContainer = styled(Container)`
  position: absolute;
  left: 7em;
  top: 1em;
`;

const InfoContainer = styled(Container)`
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
    this.totalSlides = 3;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const next = (this.state.currentSlide + 1) % 3;
    this.setState({
      currentSlide: next,
    });
  }

  render() {
    return (
      <Container width="100%" className={this.props.className}>
        <InfoContainer
          padding={[5, 5, 7, 5]}
          align="flex-start"
          show={this.state.currentSlide === 0}
        >
          <BackImage src={placeholder} width="100%" height="100%" />
          <Text white size={2.5} as={Container} padding={[1]} width="30%">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Button
            as={Link}
            to="/"
            bold="bold"
            size={2.5}
            white="true"
            margin={[0, 1]}
            padding={[0.25, 1.25]}
            width="auto"
          >
            About us
          </Button>
        </InfoContainer>

        <InfoContainer
          padding={[5, 5, 7, 5]}
          align="flex-start"
          show={this.state.currentSlide === 1}
        >
          <BackImage src={placeholder2} width="100%" height="100%" />
          <Text white size={2.5} as={Container} padding={[1]} width="30%">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Button
            as={Link}
            to="/"
            bold="bold"
            size={2.5}
            white="true"
            margin={[0, 1]}
            padding={[0.25, 1.25]}
            width="auto"
          >
            About us
          </Button>
        </InfoContainer>

        <InfoContainer
          padding={[5, 5, 7, 5]}
          align="flex-start"
          show={this.state.currentSlide === 2}
        >
          <BackImage src={placeholder3} width="100%" height="100%" />
          <Text white size={2.5} as={Container} padding={[1]} width="30%">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Button
            as={Link}
            to="/"
            bold="bold"
            size={2.5}
            white="true"
            margin={[0, 1]}
            padding={[0.25, 1.25]}
            width="auto"
          >
            About us
          </Button>
        </InfoContainer>

        <ArrowContainer flex row width="auto" height="auto" justify="flex-end">
          <Arrows handleClick={this.handleClick} />
          <Arrows left handleClick={this.handleClick} />
        </ArrowContainer>
      </Container>
    );
  }
}

export default Presentation;
