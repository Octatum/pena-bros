import React from 'react';
import Gallery from 'react-image-gallery';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';

import SubTitle from '../SubTitle';
import Quote from './Quote';
import WorksPreview from './WorksPrev';
import QuoteAction from '../QuoteAction';
import RebassText from '../RebassText';
import RebassButton from '../RebassButton';
import { Link } from 'gatsby';

const StyledRebassButton = styled(RebassButton)`
  padding-bottom: 0.1em;
  :focus {
    outline: 2px solid ${({ theme }) => theme.color.green};
  }
`;

function renderLeftNav(onClick, disabled) {
  return (
    <StyledRebassButton
      bg="transparent"
      mt={[3, 4, 5]}
      ml={[3, 4, 5]}
      fontSize={5}
      style={{ position: 'absolute', zIndex: '1' }}
      disabled={disabled}
      onClick={onClick}
    >
      ◀
    </StyledRebassButton>
  );
}

function renderRightNav(onClick, disabled) {
  return (
    <StyledRebassButton
      bg="transparent"
      mt={[3, 4, 5]}
      ml={[5, 5, 6]}
      fontSize={5}
      style={{ position: 'absolute', zIndex: '1' }}
      disabled={disabled}
      onClick={onClick}
    >
      ▶
    </StyledRebassButton>
  );
}

const StyledGalleryBox = styled(Box)``;
const StyledFlex = styled(Flex)`
  position: relative;
  height: '60vh';
  width: '100%';
  min-height: 500px;
  background-image: url('${({ image }) => image}');
  background-position: center;
  line-height: 1.2;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: black;
    left: 0;
    background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(200,200,200,0) 100%);
  }
`;

function GallerySlide(props) {
  const {
    description = 'lorem ipsum',
    buttonText = 'About us',
    original: image = '/assets/airplanes.png',
  } = props;

  return (
    <StyledFlex
      justifyContent="flex-end"
      image={image}
      flexDirection="column"
      p={[3, 4, 5]}
    >
      <Box style={{ position: 'relative' }} as="p" width={[1, 0.7, 1 / 2]}>
        <RebassText fontSize={3} color="white">
          {description}
        </RebassText>
        <Box mt={3}>
          <RebassButton py={2} px={4}>
            <RebassText
              as={Link}
              color="white"
              to="/about"
              fontSize={[3, 4]}
              fontWeight="bold"
              style={{ textDecoration: 'none' }}
            >
              {buttonText}
            </RebassText>
          </RebassButton>
        </Box>
      </Box>
    </StyledFlex>
  );
}

const HomePage = props => {
  const { data: homepageData } = props;
  const images = homepageData.homeSlideshow.slides.map(i => ({
    original: i.image.asset.fluid.src,
    description: i.description,
  }));

  const imageGalleryProps = {
    items: images,
    showPlayButton: false,
    showFullscreenButton: false,
    showThumbnails: false,
    lazyLoad: true,
    renderItem: GallerySlide,
    renderLeftNav,
    renderRightNav,
  };

  return (
    <Flex flexDirection="column">
      <StyledGalleryBox style={{ maxWidth: 1500, width: '100%' }}>
        <Gallery {...imageGalleryProps} style={{ maxWidth: 1500 }} />
      </StyledGalleryBox>
      <SubTitle
        size={2.5}
        title={homepageData.subtext1}
        margin={[2, 'auto']}
        width="75%"
        tWidth="90%"
      >
        {homepageData.subtext2}
      </SubTitle>
      <Quote
        margin={[5, 0]}
        tMargin={[2, 0]}
        size={3}
        data={homepageData.customerReviews}
      />
      <WorksPreview
        works={homepageData.works}
        margin={[5, 0]}
        tMargin={[2, 0]}
      />
      <QuoteAction quote={homepageData.quote} />
    </Flex>
  );
};
export default HomePage;
