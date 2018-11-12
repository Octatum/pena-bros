import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '../../Container';
import IndivQuote from './IndivQuote';

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      next: 1,
    };

    this.dataLength = 0;
    this.interval = null;
  }

  componentDidMount() {
    const next = (this.state.current + 1) % this.dataLength;
    const nextNext = (next + 1) % this.dataLength;
    this.interval = setInterval(() => {
      this.setState({
        current: next,
        next: nextNext,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query GetQuotes {
            allMarkdownRemark(
              filter: { frontmatter: { layout: { eq: "review" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    review
                  }
                }
              }
            }
          }
        `}
        render={data => {
          this.dataLength = data.allMarkdownRemark.edges.length;
          return (
            <Container {...this.props}>
              {data.allMarkdownRemark.edges.map((data, index) => (
                <IndivQuote
                  author={data.node.frontmatter.title}
                  key={index}
                  size={this.props.size}
                  padding={[0, 2]}
                >
                  {data.node.frontmatter.review}
                </IndivQuote>
              ))}
            </Container>
          );
        }}
      />
    );
  }
}

export default Quote;
