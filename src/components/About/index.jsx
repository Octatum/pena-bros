import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import Glide from '@glidejs/glide';

import Arrows from '../Arrows';

import { Container } from '../Container';
import { Text } from '../Text';

const Slider = styled(Container)`
  overflow-x: hidden;
`;

const SlideCont = styled(Container)`
  background-image: url(${({ image }) => image});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  height: 40em;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to left, rgba(0,0,0,0.7), rgba(0,0,0,0));
  }
`;

const Button = styled(Text)`
  background-color: ${({ theme }) => theme.color.green};
  z-index: 0;
`;

const ArrowContainer = styled(Container)`
  position: absolute;
  right: 7em;
  top: 2em;
`;

class About extends Component {
  constructor() {
    super();
    this.glide = null;
  }

  componentDidMount() {
    this.glide = new Glide('#AboutUsPres', {
      startAt: 0,
      perView: 1,
      gap: 0,
    }).mount();
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query getAboutUsSlides {
            allFile(
              filter: {
                sourceInstanceName: { eq: "aboutUsSlides" }
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
            <Slider id="AboutUsPres" {...this.props} height="auto">
              <div data-glide-el="track" className="glide__track">
                <Container className="glide__slides" height="100%">
                  {data.allFile.edges.map((_, index) => {
                    const { frontmatter } = _.node.childMarkdownRemark;
                    return (
                      <SlideCont
                        image={frontmatter.image}
                        className="glide__slide"
                        flex
                        align="flex-end"
                        key={frontmatter.image}
                        padding={[5, 5, 7, 5]}
                      >
                        <Text
                          white
                          size={2.5}
                          as={Container}
                          padding={[1]}
                          width="30%"
                          align="right"
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
                <Arrows left handleClick={() => this.glide.go('<')} />
                <Arrows handleClick={() => this.glide.go('>')} />
              </ArrowContainer>
            </Slider>
          );
        }}
      />
    );
  }
}

export default About;
