import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import Glide from '@glidejs/glide';

import Arrows from './Arrows';

import { Container } from '../Container';
import { Text } from '../Text';
import { Image } from '../Image';

const Slider = styled(Container)`
  overflow: hidden;
`;

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
            allFile(filter: { sourceInstanceName: { eq: "aboutUsSlides" } }) {
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
            <Slider id="AboutUsPres" {...this.props}>
              <div data-glide-el="track" className="glide__track">
                <Container className="glide__slides">
                  {
                    data.allFile.edges.map((_, index) => {
                      const { frontmatter } = _.node.childMarkdownRemark;
                      return (
                        <Container className="glide__slide" flex align="flex-end" key={index} padding={[5, 5, 7, 5]}>
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
                        </Container>
                      )
                    })
                  }
                </Container>
              </div>
              <ArrowContainer flex row width="auto" height="auto" justify="flex-end">
                <Arrows handleClick={() => this.glide.go('<')} />
                <Arrows left handleClick={() => this.glide.go('>')} />
              </ArrowContainer>
            </Slider>
          )
        }}
      />
    );
  }
}

export default About;