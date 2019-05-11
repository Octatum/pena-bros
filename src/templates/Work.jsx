import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Glide from '@glidejs/glide';
import PageLayout from '../components/PageLayout';
import Arrows from '../components/Arrows';
import Subtitle from '../components/SubTitle';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Image } from '../components/Image';
import QuoteAction from '../components/QuoteAction';
import { numberValues, device } from '../utils/device';
import { cleanString } from '../utils/lib';

const LeftArrow = styled(Arrows)`
  position: absolute;
  left: -3em;
  top: 50%;
  transform: translate(0, -50%) scale(1.25);

  ${device.tablet} {
    top: initial;
    bottom: 1em;
    left: 1em;

    transform: scale(1.25);
  }
`;
const RightArrow = styled(LeftArrow)`
  left: initial;
  right: -3em;

  ${device.tablet} {
    right: initial;
    left: 3.5em;
  }
`;
const ArrowLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Images = styled(Image)`
  width: 100%;
`;

const Slider = styled(Container)`
  overflow-x: hidden;
`;

const WorkDescription = styled(Container)`
  > ${Image} {
    ${device.tablet} {
      display: none;
    }
  }

  ${device.tablet} {
    background-color: transparent;
  }

  & ~ * {
    ${device.tablet} {
      top: -3px;
    }
  }
`;
const ArrowsContainer = styled(Container)`
  ${device.tablet} {
    display: none;
  }
`;

class IndivWork extends Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
      slider: null,
    };

    this.handleNextImage = this.handleNextImage.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
  }

  handleArrowClick(index) {
    const allImagesLength = this.props.data.sanityOurWorks.images.length;
    let temp = 0;
    if (index < this.state.currentImage) {
      temp = (index + allImagesLength) % allImagesLength;
    } else {
      temp = index % allImagesLength;
    }

    this.state.slider.go(`=${temp}`);

    this.setState({
      currentImage: temp,
    });
  }

  handleNextImage() {
    const next = this.state.slider.index;

    this.setState({
      currentImage: next,
    });
  }

  componentDidMount() {
    const glide = new Glide('#IndividualWorkImages', {
      startAt: 0,
      perView: 4,
      gap: 50,
      breakpoints: {
        [numberValues.tablet]: {
          perView: 1,
          gap: 0,
        },
      },
    });

    glide.on(['run.after'], this.handleNextImage);

    glide.mount();

    this.setState({
      slider: glide,
    });
  }

  render() {
    const { title, description, images } = this.props.data.sanityOurWorks;

    const {
      sitePath,
      prev: previousUrl,
      next: nextUrl,
    } = this.props.pageContext;
    const next = cleanString(nextUrl);
    const prev = cleanString(previousUrl);

    return (
      <PageLayout>
        <Helmet title={title} />
        <Container>
          <ArrowsContainer
            flex
            row
            width="auto"
            height="auto"
            justify="flex-start"
            padding={[0, 19.5]}
            margin={[2, 0, 1, 0]}
          >
            <Container width="auto">
              <Arrows
                arrowColors={
                  prev === '' ? ['gray', 'gray'] : ['green', 'green']
                }
                left
              />
              {prev && <ArrowLink to={sitePath + (prev ? prev : title)} />}
            </Container>
            <Container width="auto">
              <Arrows
                arrowColors={
                  next === '' ? ['gray', 'gray'] : ['green', 'green']
                }
              />
              {next && <ArrowLink to={sitePath + (next ? next : title)} />}
            </Container>
          </ArrowsContainer>

          <Text
            bold="bold"
            size={9}
            margin={[0, 6.18]}
            tMargin={[1, 0.75, 0, 'auto']}
            align="left"
          >
            {title}
          </Text>

          <WorkDescription
            flex
            height="auto"
            width="auto"
            padding={[0, 20]}
            tPadding={[0]}
            margin={[1, 0, 0, 0]}
            tMargin={[1, 0, 0, 0]}
          >
            <Image
              src={images[this.state.currentImage].asset.url}
              width="100%"
              height="730px"
              fit="cover"
            />
            <Container
              flex
              row
              justify="space-between"
              margin={[2, 0]}
              tMargin={[0]}
            >
              <Slider id="IndividualWorkImages" height="auto">
                <div data-glide-el="track" className="glide__track">
                  <Container className="glide__slides" height="auto">
                    {images.map((data, _) => {
                      return (
                        <Container className="glide__slide">
                          <Images src={data.asset.url} key={data} />
                        </Container>
                      );
                    })}
                  </Container>
                </div>
              </Slider>

              <LeftArrow
                onClick={() =>
                  this.handleArrowClick(this.state.currentImage - 1)
                }
                arrowColors={['green', 'white']}
                left
              />
              <RightArrow
                onClick={() =>
                  this.handleArrowClick(this.state.currentImage + 1)
                }
                arrowColors={['green', 'white']}
              />
            </Container>
          </WorkDescription>

          <Subtitle
            bold="lighter"
            size={3}
            margin={[0, 19.8]}
            tMargin={[0, 3, 5, 'auto']}
            width="80%"
            style={{ maxWidth: '750px' }}
            edgeColor="green"
          >
            {description}
          </Subtitle>

          <QuoteAction margin={[5, 0]} />
        </Container>
      </PageLayout>
    );
  }
}

export default IndivWork;

export const getWorkQuery = graphql`
  query getWork($title: String) {
    sanityOurWorks(title: { eq: $title }) {
      title
      description
      images {
        asset {
          url
        }
      }
    }
  }
`;
