import React, { Component } from 'react';
import styled from 'styled-components';

import Glide from '@glidejs/glide';

import { Container } from '../../Container';
import IndivQuote from './IndivQuote';

const AllQuoteContainer = styled(Container)`
  flex-wrap: wrap;
  overflow: hidden;
`;

class Quote extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      gap: 0,
      autoplay: 5000,
      hoverpause: false,
    }).mount();
  }

  render() {
    return (
      <AllQuoteContainer {...this.props} className="glide">
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            {this.props.data.allMarkdownRemark.edges.map((data, index) => {
              return (
                <IndivQuote
                  key={index}
                  size={this.props.size}
                  padding={[0, 2]}
                  className="glide__slide"
                  author={data.node.frontmatter.title}
                >
                  {data.node.frontmatter.review}
                </IndivQuote>
              );
            })}
          </ul>
        </div>
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
