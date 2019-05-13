import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import 'react-image-gallery/styles/css/image-gallery.css';

import Gallery from 'react-image-gallery';
import PageLayout from '../components/PageLayout';
import Arrows from '../components/Arrows';
import Subtitle from '../components/SubTitle';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import QuoteAction from '../components/QuoteAction';
import { device } from '../utils/device';
import { Box, Flex } from 'rebass';
import { cleanString } from '../utils/lib';

const ImageGalleryWrapper = styled(Box)`
  .image-gallery-thumbnails {
    padding-top: 8px;

    .image-gallery-thumbnails-container {
      ${({ imagesLength }) => imagesLength < 4 && 'text-align: left;'}

      .image-gallery-thumbnail-inner > img {
        max-height: 100px;
      }
    }
  }

  .image-gallery-thumbnail {
    width: 27%;
    min-width: 200px;
    box-sizing: border-box;
  }

  .image-gallery-swipe,
  .image-gallery-thumbnails-wrapper.bottom {
    width: 80%;
    margin: 0 auto;
  }

  .image-gallery-slide-wrapper {
    > span {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    ${device.tablet} {
      width: 100%;
    }
  }
`;

const LeftArrow = styled(Arrows)`
  position: absolute;
  bottom: -100px;
  transform: translate(0, -50%) scale(1.25) rotate(0.5turn);

  ${device.tablet} {
    top: initial;
    bottom: 1em;
    left: 1em;

    transform: scale(1.25);
  }
`;
const RightArrow = styled(LeftArrow)`
  left: initial;
  right: 0;
  transform: translate(0, -50%) scale(1.25);

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

function renderLeftNav(onClick, disabled) {
  return (
    <LeftArrow
      className="image-gallery-custom-left-nav"
      disabled={disabled}
      onClick={onClick}
      arrowColors={['green', 'green']}
    />
  );
}

function renderRightNav(onClick, disabled) {
  return (
    <RightArrow
      className="image-gallery-custom-right-nav"
      disabled={disabled}
      onClick={onClick}
      dataRotate
      arrowColors={['green', 'green']}
    />
  );
}

const ArrowsContainer = styled(Container)`
  ${device.tablet} {
    display: none;
  }
`;

function IndivWork(props) {
  const [currentImage, setCurrentImage] = useState(0);
  const [slider, setCurrentSlider] = useState(null);
  const { title, description, images } = props.data.sanityOurWorks;

  const imageGalleryProps = {
    items: images.map(item => ({
      original: item.asset.url,
      thumbnail: item.asset.url,
    })),
    showPlayButton: false,
    showFullscreenButton: false,
    lazyLoad: true,
    renderLeftNav,
    renderRightNav,
  };

  const { sitePath, prev: previousUrl, next: nextUrl } = props.pageContext;
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
              arrowColors={prev === '' ? ['gray', 'gray'] : ['green', 'green']}
              left
            />
            {prev && <ArrowLink to={sitePath + (prev ? prev : title)} />}
          </Container>
          <Container width="auto">
            <Arrows
              arrowColors={next === '' ? ['gray', 'gray'] : ['green', 'green']}
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
        <Flex alignItems="center" justifyContent="center">
          <ImageGalleryWrapper py={4} style={{ maxWidth: 800 }}>
            <Gallery {...imageGalleryProps} />
          </ImageGalleryWrapper>
        </Flex>

        <Subtitle
          bold="lighter"
          size={3}
          margin={[0, 22]}
          tMargin={[0, 3, 5, 'auto']}
          width="80%"
          style={{ maxWidth: '670px' }}
          edgeColor="green"
        >
          <div style={{ textAlign: 'justify' }}>{description}</div>
        </Subtitle>

        <QuoteAction margin={[5, 0]} />
      </Container>
    </PageLayout>
  );
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
