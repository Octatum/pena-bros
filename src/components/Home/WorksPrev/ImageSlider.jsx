import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Image } from '../../Image';

const ImageContainer = styled(Container)`
  overflow-x: hidden;
`;

const ImageSlider = ({ images, ...props }) => (
  <ImageContainer flex row justify="space-between" {...props}>
    {images.map((data, index) => {
      return <Image src={data} key={index} />;
    })}
  </ImageContainer>
);

export default ImageSlider;
