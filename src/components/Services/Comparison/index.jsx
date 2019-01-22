import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Glide from '@glidejs/glide';
import SubTitle from '../../SubTitle';
import { Container } from '../../Container';
import { Image } from '../../Image';
import ActionButton from '../../ActionButton';
import { device } from '../../../utils/device';
import Arrows from '../../Arrows';

const Action = styled(ActionButton)`
  align-self: flex-end;

  ${device.tablet} {
    position: absolute;
    top: calc(100% + 0.75em);
    left: 3em;
    align-self: flex-start;

    * {
      color: ${({ theme }) => theme.color.black};
    }
  }
`;

const ComparisonContainer = styled(Container)`
  ${device.tablet} {
    flex-direction: column;
  }
`;
const ImagesContainer = styled(Container)`
  display: grid;
  grid-template: 1fr 1fr / repeat(3, auto);
  gap: 30px;
  align-items: center;
  justify-items: center;

  ${device.tablet} {
    display: none;
  }
`;
const ImageSlider = styled(Container)`
  display: none;
  ${device.tablet} {
    display: block;
    overflow-x: hidden;
  }
`;
const ArrowsContainer = styled(Container)`
  display: none;

  ${device.tablet} {
    display: flex;
    align-self: flex-end;
  }
`;

class Comparison extends Component {
  constructor() {
    super();

    this.oldCarsSlider = null;
    this.newCarsSlider = null;
  }

  componentDidMount() {
    this.oldCarsSlider = new Glide('#OldCarsImages', {
      startAt: 0,
      perView: 1,
      gap: 0,
    }).mount();

    this.newCarsSlider = new Glide('#NewCarsImages', {
      startAt: 0,
      perView: 1,
      gap: 0,
    }).mount();
  }

  render() {
    const { data, current, ...props } = this.props;
    const frontmatter = data.node.childMarkdownRemark.frontmatter;

    const oldCars = frontmatter.oldCarsWorks.map((data, index) => {
      return (
        <Image
          src={data}
          key={data}
          width="250px"
          height="250px"
          fit="cover"
          key={index}
        />
      );
    });

    const newCars = frontmatter.newCarsWorks.map((data, index) => {
      return (
        <Image
          src={data}
          key={data}
          width="250px"
          height="250px"
          fit="cover"
          key={index}
        />
      );
    });

    return (
      <ComparisonContainer flex row {...props}>
        <Container flex backColor="green" padding={[3]} tMargin={[0, 0, 5, 0]}>
          <SubTitle
            padding={[0, 0, 3, 0]}
            tPadding={[0]}
            title={frontmatter.oldCarServiceTitle}
            edgeColor="black"
            tEdgeColor="black"
            white
            size={2}
          >
            {frontmatter.oldCarServicDescription}
          </SubTitle>

          <ImagesContainer>{oldCars}</ImagesContainer>

          <ArrowsContainer width="auto" margin={[2, 0]}>
            <Arrows
              onClick={() => this.oldCarsSlider.go('<')}
              arrowColors={['white', 'white']}
              left
            />
            <Arrows
              onClick={() => this.oldCarsSlider.go('>')}
              arrowColors={['white', 'white']}
            />
          </ArrowsContainer>

          <ImageSlider id="OldCarsImages" height="auto">
            <div data-glide-el="track" className="glide__track">
              <Container className="glide__slides" height="auto">
                {frontmatter.oldCarsWorks.map((data, index) => {
                  return (
                    <Container className="glide__slide">
                      <Image
                        src={data}
                        key={data}
                        width="100%"
                        height="auto"
                        fit="cover"
                        key={index}
                      />
                    </Container>
                  );
                })}
              </Container>
            </div>
          </ImageSlider>

          <Action
            width="auto"
            noAnimate
            textColor="white"
            linkTo="our-works"
            name="go to our works"
            onMobileReverse={false}
            arrowColors={['white', 'black']}
          />
        </Container>

        <Container flex backColor="black" padding={[3]}>
          <SubTitle
            padding={[0, 0, 3, 0]}
            tPadding={[0]}
            title={frontmatter.newCarServiceTitle}
            edgeColor="green"
            white
            size={2}
          >
            {frontmatter.newCarServiceDescription}
          </SubTitle>

          <ImagesContainer>{newCars}</ImagesContainer>

          <ArrowsContainer width="auto" margin={[2, 0]}>
            <Arrows
              onClick={() => this.newCarsSlider.go('<')}
              arrowColors={['white', 'white']}
              left
            />
            <Arrows
              onClick={() => this.newCarsSlider.go('>')}
              arrowColors={['white', 'white']}
            />
          </ArrowsContainer>

          <ImageSlider id="NewCarsImages" height="auto">
            <div data-glide-el="track" className="glide__track">
              <Container className="glide__slides" height="auto">
                {frontmatter.newCarsWorks.map((data, index) => {
                  return (
                    <Container className="glide__slide">
                      <Image
                        src={data}
                        key={data}
                        width="100%"
                        height="auto"
                        fit="cover"
                        key={index}
                      />
                    </Container>
                  );
                })}
              </Container>
            </div>
          </ImageSlider>

          <Action
            width="auto"
            noAnimate
            textColor="white"
            linkTo="our-works"
            name="go to our works"
            onMobileReverse={false}
            arrowColors={['white', 'black']}
          />
        </Container>
      </ComparisonContainer>
    );
  }
}

Comparison.propTypes = {
  data: PropTypes.array,
  current: PropTypes.number,
};

export default Comparison;
