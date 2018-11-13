import React, { Component } from 'react';
import styled from 'styled-components';

import { Container } from '../../Container';
import IndivQuote from './IndivQuote';

const AllQuoteContainer = styled(Container)`
  flex-wrap: wrap;
  flex-direction: row;
`;

class Quote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      next: 1,
    };
    this.dataLength = props.data.allMarkdownRemark.edges.length;
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const next = (this.state.current + 1) % this.dataLength;
      const nextNext = (next + 1) % this.dataLength;
      this.setState({
        current: next,
        next: nextNext,
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <AllQuoteContainer {...this.props}>
        {this.props.data.allMarkdownRemark.edges.map((data, index) => {
          return (
            <IndivQuote
              key={index}
              size={this.props.size}
              padding={[0, 2]}
              author={data.node.frontmatter.title}
              isCurrent={this.state.current === index}
              isNext={this.state.next === index}
            >
              {data.node.frontmatter.review}
            </IndivQuote>
          )
        })}
      </AllQuoteContainer>
    );
  }
}

export default Quote;

/*
{this.props.data.allMarkdownRemark.edges.map((data, index) => {
          return (
            <IndivQuote
              key={index}
              size={this.props.size}
              padding={[0, 2]}
              author={data.node.frontmatter.title}
              isCurrent={this.state.current === index}
              isNext={this.state.next === index}
            >
              {data.node.frontmatter.review}
            </IndivQuote>
          )
        })}
*/