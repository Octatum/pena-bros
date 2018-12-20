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

const LeftArrow = styled(Arrows)`
  position: absolute;
  left: -3em;
  top: 50%;
`;
const RightArrow = styled(Arrows)`
  position: absolute;
  right: -3em;
  top: 50%;
`;
const ArrowLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;
const Slider = styled(Container)`
  overflow-x: hidden;
`;

class IndivWork extends Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
    };

    this.glide = null;

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleNextImage = this.handleNextImage.bind(this);
  }

  componentDidMount() {
    this.glide = new Glide('#IndivWorkImages', {
      startAt: 0,
      perView: 4,
      gap: 1,
      type: 'slider',
      preventClicks: false,
      preventClicksPropagation: false,
    }).mount();
  }

  handleNextImage(e, isNext) {
    const allImagesLength = this.props.data.markdownRemark.frontmatter.allImages
      .length;
    let next = isNext
      ? this.state.currentImage + 1
      : this.state.currentImage - 1;

    next = next < 0 ? allImagesLength - 1 : next;
    next = next >= allImagesLength ? 0 : next;

    this.glide.go(isNext ? '>' : '<');

    this.setState({
      currentImage: next,
    });

    console.log(this.glide)
  }

  handleImageClick(e, index) {
    console.log("IMAGEA")
    this.setState({
      currentImage: index,
    });
  }

  render() {
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
          <Container
            flex
            row
            width="auto"
            height="auto"
            justify="flex-start"
            padding={[0, 19.5]}
          >
            <Container width="auto">
              <Arrows color="black" left />
              <ArrowLink to={`our-works/works/${prev}`} />
            </Container>
            <Container width="auto">
              <Arrows color="black" />
              <ArrowLink to={`our-works/works/${next}`} />
            </Container>
          </Container>

          <Text bold="bold" size={9} margin={[0, 4.714]}>
            {title}
          </Text>

          <Container
            flex
            backColor="green"
            height="auto"
            width="auto"
            padding={[0, 20]}
            margin={[1, 0, 0, 0]}
          >
            <Image src={allImages[this.state.currentImage]} width="100%" />
            <Container flex row justify="space-between" margin={[2, 0]}>
              <LeftArrow
                handleClick={e => this.handleNextImage(e, false)}
                left
                color="white"
              />
              <Slider id="IndivWorkImages" height="auto" >
                <div data-glide-el="track" className="glide__track" style={{position: 'relative'}} >
                  <Container className="glide__slides" height="auto" >
                    {allImages.map((data, index) => {
                      return (
                        <Image
                          className="glide__slide"
                          style={{ cursor: 'pointer' }}
                          height="15em"
                          src={data}
                          key={index}
                          onClick={e => console.log(e)}
                        />
                      );
                    })}
                  </Container>
                </div>
              </Slider>
              <RightArrow
                handleClick={e => this.handleNextImage(e, true)}
                color="white"
              />
            </Container>
          </Container>

          <Subtitle
            bold="lighter"
            size={3}
            margin={[0, 19.8]}
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

/* export const getWorkQuery = graphql`
  query getWorkGlide($title: String, $date: String) {
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
 */