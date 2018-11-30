import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '../Container';
import { Image } from '../Image';
import SingleProduct from './SingleProduct';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      currentViewed: 0,
    };

    this.clickSelection = this.clickSelection.bind(this);
  }

  clickSelection(e, index) {
    this.setState({
      currentViewed: index,
    });
    console.log(index);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query getProducts {
            allFile(filter: { sourceInstanceName: { eq: "OurProducts" } }) {
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
        render={data => {
          return (
            <Container margin={[5, 3]} width="auto">
              <Container flex row justify="space-between" height="auto">
                {data.allFile.edges.map((_, index) => {
                  const { frontmatter } = _.node.childMarkdownRemark;
                  return (
                    <Container
                      flex
                      key={index}
                      onClick={e => this.clickSelection(e, index)}
                      backColor={
                        this.state.currentViewed === index ? 'green' : 'black'
                      }
                      padding={[2, 3]}
                      width="auto"
                      height="auto"
                    >
                      <Image src={frontmatter.preview} width="80%" />
                    </Container>
                  );
                })}
              </Container>

              <Container height="auto">
                {data.allFile.edges.map((_, index) => {
                  const { frontmatter } = _.node.childMarkdownRemark;
                  return (
                    <SingleProduct
                      title={frontmatter.title}
                      preview={frontmatter.preview}
                      image={frontmatter.image}
                      description={frontmatter.description}
                      key={index}
                      backColor="green"
                      show={this.state.currentViewed === index}
                    />
                  );
                })}
              </Container>
            </Container>
          );
        }}
      />
    );
  }
}

export default Products;
