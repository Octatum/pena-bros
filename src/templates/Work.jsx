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

const LeftArrow = styled(Arrows)`
  position: absolute;
  left: -3em;
  top: 50%;
  transform: translate(0, -50%);

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
  }

  handleNextImage(move) {
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
    console.log(this.state.slider);

    const {
      title,
      description,
      allImages,
    } = this.props.data.markdownRemark.frontmatter;
    const workId = this.props.pageContext.numberId;
    const prev = workId - 1 <= 0 ? 0 : workId - 1;
    const next =
      workId + 1 >= this.props.pageContext.maxPosts ? workId : workId + 1;

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
          >
            <Container width="auto">
              <Arrows left />
              <ArrowLink to={`our-works/works/${prev}`} />
            </Container>
            <Container width="auto">
              <Arrows />
              <ArrowLink to={`our-works/works/${next}`} />
            </Container>
          </ArrowsContainer>

          <Text
            bold="bold"
            size={9}
            margin={[0, 4.714]}
            tMargin={[1, 0.75, 0, 'auto']}
            align="right"
          >
            {title}
          </Text>

          <WorkDescription
            flex
            backColor="green"
            height="auto"
            width="auto"
            padding={[0, 20]}
            tPadding={[0]}
            margin={[1, 0, 0, 0]}
            tMargin={[1, 0, 0, 0]}
          >
            <Image src={allImages[this.state.currentImage]} width="100%" />
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
                    {allImages.map((data, _) => {
                      return (
                        <Container className="glide__slide">
                          <Images src={data} key={data} />
                        </Container>
                      );
                    })}
                  </Container>
                </div>
              </Slider>

              <LeftArrow
                onClick={() => this.state.slider.go('<')}
                left
                arrowColors={['white', 'white']}
              />
              <RightArrow
                onClick={() => this.state.slider.go('>')}
                arrowColors={['white', 'white']}
              />
            </Container>
          </WorkDescription>

          <Subtitle
            bold="lighter"
            size={3}
            margin={[0, 19.8]}
            tMargin={[0, 3, 5, 'auto']}
            width="80%"
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
  query getWork($title: String, $date: String) {
    markdownRemark(
      frontmatter: { title: { eq: $title }, createDate: { eq: $date } }
    ) {
      frontmatter {
        title
        description
        allImages
      }
    }
  }
`;
