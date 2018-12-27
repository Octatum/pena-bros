import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Image } from '../../Image';
import { Link } from 'gatsby';

const ImageContainer = styled(Container)`
  overflow-x: hidden;
`;

const LinkTo = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const ImageSlider = ({ images, ...props }) => (
  <ImageContainer flex row justify="space-between" {...props}>
    {images.map((data, index) => {
      return (
        <Container flex width="25%">
          <Image src={data} key={data} width="100%" />
          <LinkTo to={`our-works/works/${index}`} />
        </Container>
      );
    })}
  </ImageContainer>
);

export default ImageSlider;
