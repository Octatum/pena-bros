import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import Glide from '@glidejs/glide';

import { Container } from '../../Container';
import { Text } from '../../Text';

import Arrows from '../../Arrows';
import { device } from '../../../utils/device';

const Slider = styled(Container)`
  overflow-x: hidden;
`;

const SlideCont = styled(Container)`
  background-image: url(${({ image }) => image});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: cover;

  height: 800px;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0)
    );
  }

  ${device.tablet} {
    height: 600px;
    ::before {
      background-image: none;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const Button = styled(Text)`
  background-color: ${({ theme }) => theme.color.green};
  z-index: 0;
`;

const ArrowContainer = styled(Container)`
  position: absolute;
  left: 7em;
  top: 1em;

  ${device.tablet} {
    left: 1em;
  }
`;

class Presentation extends Component {
  constructor() {
    super();

    this.glide = null;
  }

  componentDidMount() {
    this.glide = new Glide('#HomePres', {
      startAt: 0,
      type: 'carousel',
      perView: 1,
      gap: 0,
    }).mount();
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query getSlides {
            allFile(
              filter: {
                sourceInstanceName: { eq: "homeSlides" }
                name: { ne: ".gitkeep" }
              }
            ) {
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
          return (
            <Slider id="HomePres" {...this.props} height="auto">
              <div data-glide-el="track" className="glide__track">
                <Container className="glide__slides" height="auto">
                  {data.allFile.edges.map((_, index) => {
                    const { frontmatter } = _.node.childMarkdownRemark;
                    return (
                      <SlideCont
                        className="glide__slide"
                        image={frontmatter.image}
                        flex
                        align="flex-start"
                        key={frontmatter.image}
                        padding={[5, 5, 7, 5]}
                        tPadding={[4, 0, 2, 0]}
                      >
                        <Text
                          white
                          size={2}
                          as={Container}
                          padding={[1]}
                          width="55%"
                          tWidth="calc(100% - 4em)"
                          align="left"
                        >
                          {frontmatter.description}
                        </Text>
                        <Button
                          as={Link}
                          to={frontmatter.link === 'About Us' ? '/about' : '/'}
                          bold="bold"
                          size={2}
                          white="true"
                          margin={[0, 1]}
                          padding={[0.25, 1.25]}
                          width="auto"
                        >
                          {frontmatter.link}
                        </Button>
                      </SlideCont>
                    );
                  })}
                </Container>
              </div>
              <ArrowContainer
                flex
                row
                width="auto"
                height="auto"
                justify="flex-end"
              >
                <Arrows
                  left
                  handleClick={() => this.glide.go('<')}
                  arrowColors={['white', 'white']}
                />
                <Arrows
                  handleClick={() => this.glide.go('>')}
                  arrowColors={['white', 'white']}
                />
              </ArrowContainer>
            </Slider>
          );
        }}
      />
    );
  }
}

export default Presentation;
