import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from '../../Container';
import { Image } from '../../Image';
import { Link } from 'gatsby';
import { numberValues, device } from '../../../utils/device';

import Glide from '@glidejs/glide';

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

const Bullets = styled(Container)`
  position: absolute;
  left: 50%;
  top: 85%;
  display: none;
  transform: translate(-50%, 0);

  ${device.tablet} {
    display: block;
  }
`;

const SingleBullet = styled.button`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  margin: 0 0.3em;

  background-color: ${({ theme }) => theme.color.white};

  outline: none;
  border: 0;

  transition: background-color 0.5s ease;

  &.glide__bullet--active {
    background-color: ${({theme}) => theme.color.green}
  }
`;

class ImageSlider extends Component {
  constructor() {
    super()

    this.glide = null;
  }

  componentDidMount() {
    const breakPoint = numberValues.tablet;
    this.glide = new Glide('#HomeWorksPreviewSlider', {
      startAt: 0,
      perView: 3,
      gap: 48,
      breakpoints: {
        [breakPoint]: {
          perView: 1,
          gap: 0,
        }
      }
    }).mount()
  }

  render() {
    const { images, ...props } = this.props;
    return (
      <ImageContainer id="HomeWorksPreviewSlider" {...props} height="auto">
        <div data-glide-el="track" className="glide__track" style={{ height: "auto" }}>
          <Container className="glide__slides" height="auto">
            {images.map((data, index) => {
              return (
                <Container flex className="glide__slide" key="data">
                  <Image src={data} key={data} width="100%" />
                  <LinkTo to={`our-works/works/${index}`} />
                </Container>
              );
            })}
          </Container>
        </div>

        <Bullets className="glide__bullets" data-glide-el="controls[nav]" height="auto" width="auto">
          <SingleBullet className="glide__bullet" data-glide-dir="=0"></SingleBullet>
          <SingleBullet className="glide__bullet" data-glide-dir="=1"></SingleBullet>
          <SingleBullet className="glide__bullet" data-glide-dir="=2"></SingleBullet>
        </Bullets>
      </ImageContainer>
    );
  }
}

export default ImageSlider;
