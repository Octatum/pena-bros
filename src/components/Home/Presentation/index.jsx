import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';

import { Container } from '../../Container';
import { Image } from '../../Image';
import { Text } from '../../Text';

import Arrows from './Arrows';

const BackImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

const Button = styled(Text)`
  background-color: ${({ theme }) => theme.color.green};
`;

const ArrowContainer = styled(Container)`
  position: absolute;
  left: 7em;
  top: 1em;
`;

const InfoContainer = styled(Container).attrs({
  style: ({ show }) => ({
    display: show ? 'block' : 'none',
  }),
})``;

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
    this.totalSlides = 3;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const next = (this.state.currentSlide + 1) % 3;
    this.setState({
      currentSlide: next,
    });
  }

  render() {
    return (
      <Container width="100%" className={this.props.className}>
        <StaticQuery
          query={graphql`
            query getSlides {
              allFile(filter: { sourceInstanceName: { eq: "homeSlides" } }) {
                edges {
                  node {
                    name
                    relativePath
                    childMarkdownRemark {
                      frontmatter {
                        description
                        link
                        image
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            return data.allFile.edges.map((_, index) => {
              const { frontmatter } = _.node.childMarkdownRemark;
              return (
                <InfoContainer
                  padding={[5, 5, 7, 5]}
                  algin="flex-start"
                  show={this.state.currentSlide === index}
                  key={index}
                >
                  <BackImage
                    src={frontmatter.image}
                    width="100%"
                    height="100%"
                  />
                  <Text
                    white
                    size={2.5}
                    as={Container}
                    padding={[1]}
                    width="30%"
                  >
                    {frontmatter.description}
                  </Text>
                  <Button
                    as={Link}
                    to={frontmatter.link === 'About Us' ? '/about' : '/'}
                    bold="bold"
                    size={2.5}
                    white="true"
                    margin={[0, 1]}
                    padding={[0.25, 1.25]}
                    width="auto"
                  >
                    {frontmatter.link}
                  </Button>
                </InfoContainer>
              );
            });
          }}
        />
        <ArrowContainer flex row width="auto" height="auto" justify="flex-end">
          <Arrows handleClick={this.handleClick} />
          <Arrows left handleClick={this.handleClick} />
        </ArrowContainer>
      </Container>
    );
  }
}

export default Presentation;
