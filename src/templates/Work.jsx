import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Helmet from 'react-helmet';

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
const ImagesContainer = styled(Container)`
  overflow-x: auto;

  & > div {
    transition: transform 1s ease;

    transform: ${({ current }) => `translateX(-${current*16}em)`};

    :last-child {
      margin-right: 0;
    }

  }
`;
const Images = styled(Image)`
  height: 15em;
  width: 15em;
  cursor: pointer;
  float: left;
  margin-right: 1em;
`;

class IndivWork extends Component {
  constructor() {
    super();

    this.state = {
      currentImage: 0,
    };

    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleNextImage = this.handleNextImage.bind(this);
  }

  handleNextImage(e, isNext) {
    const allImagesLength = this.props.data.markdownRemark.frontmatter.allImages
      .length;
    let next = isNext
      ? this.state.currentImage + 1
      : this.state.currentImage - 1;

    next = next < 0 ? allImagesLength - 1 : next;
    next = next >= allImagesLength ? 0 : next;

    this.setState({
      currentImage: next,
    });
  }

  handleImageClick(e, index) {
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
              <ImagesContainer current={this.state.currentImage} >
                <Container width={`${16*allImages.length}em`}>
                  {allImages.map((data, index) => {
                    return (
                      <Images
                        src={data}
                        key={data}
                        onClick={e => this.handleImageClick(e, index)}
                      />
                    );
                  })}
                </Container>
              </ImagesContainer>
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
