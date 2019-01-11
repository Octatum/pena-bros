import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../Container';
import { Image } from '../Image';
import SingleProduct from './SingleProduct';
import { numberValues, device } from '../../utils/device';
import Arrows from '../Arrows';

const Selection = styled(Container)`
  ${device.tablet} {
    background-color: ${({ theme }) => theme.color.green};
  }
`;

const ArrowContainer = styled(Container).attrs({
  flex: true,
  align: 'center',
  justify: 'center'
})`
  width: 7em;
  display: none;
  align-self: center;

  div {
    transform: scale(1.25);
  }

  ${device.tablet} {
    display: flex;
  }
`;

const Tabs = styled(Container)`
  overflow-x: auto;
  width: calc(100% - 14em);

  & > div {
    ${device.tablet} {
      transition: transform 1s ease;

      transform: ${({ current, total }) => `translateX(-${current/total*100}%)`};
    }

  }
`;

class Products extends Component {
  constructor() {
    super();
    this.state = {
      currentViewed: 0,
    };

    this.clickSelection = this.clickSelection.bind(this);
    this.handleSelectNext = this.handleSelectNext.bind(this);
    this.handleSelectPrev = this.handleSelectPrev.bind(this);
  }

  handleSelectNext() {
    let next = (this.state.currentViewed + 1) % this.props.data.allFile.edges.length;

    this.setState({
      currentViewed: next
    })
  }

  handleSelectPrev() {
    let prev = this.state.currentViewed - 1;

    if(prev < 0) {
      prev = this.props.data.allFile.edges.length - 1;
    }

    this.setState({
      currentViewed: prev,
    })
  }

  clickSelection(e, index) {
    this.setState({
      currentViewed: index,
    });
  }

  render() {
    let isMobile = false;
    if (typeof window !== "undefined") {
      isMobile = window.innerWidth <= numberValues.tablet;
    }

    const current =
      this.props.data.allFile.edges[this.state.currentViewed].node
        .childMarkdownRemark.frontmatter;

    return (
      <Container margin={[5, 3]} tMargin={[0, 0, 5, 0]} width="auto" height="auto">
        <Selection flex row tPadding={[5, 0, 0, 0]}>
          <ArrowContainer>
            <Arrows left onClick={this.handleSelectPrev} />
          </ArrowContainer>

          <Tabs current={this.state.currentViewed} total={this.props.data.allFile.edges.length}>
            <Container flex row justify={isMobile ? "center" : "flex-start"} width="auto" tWidth={`${50*this.props.data.allFile.edges.length}%`} height="auto" align={isMobile ? "flex-end" : "initial"}>
              {this.props.data.allFile.edges.map((_, index) => {
                const { frontmatter } = _.node.childMarkdownRemark;
                return (
                  <Container
                    flex
                    key={frontmatter.preview}
                    onClick={e => this.clickSelection(e, index)}
                    backColor={
                      isMobile ? 
                        'black'
                        : 
                        this.state.currentViewed === index ? 'green' : 'black'
                    }
                    padding={[1, 2.5]}
                    tPadding={this.state.currentViewed === index ? [2, 1] : [1, 1]}
                    width="auto"
                    tWidth="50%"
                    height="auto"
                    style={{ cursor: 'pointer' }}
                  >
                    <Image
                      src={frontmatter.preview}
                      width="90%"
                      height="15em"
                      mHeight="auto"
                    />
                  </Container>
                );
              })}
            </Container>
          </Tabs>

          <ArrowContainer>
            <Arrows onClick={this.handleSelectNext} />
          </ArrowContainer>
        </Selection>

        <SingleProduct
          height="auto"
          title={current.title}
          preview={current.preview}
          image={current.image}
          description={current.description}
          backColor={isMobile ? "transparent" : "green"}
        />
      </Container>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query getProducts {
        allFile(
          filter: {
            sourceInstanceName: { eq: "OurProducts" }
            name: { ne: ".gitkeep" }
          }
        ) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  title
                  preview
                  image
                  description
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Products data={data} {...props} />}
  />
);