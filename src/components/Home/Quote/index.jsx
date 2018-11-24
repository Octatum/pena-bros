import React, { Component } from 'react';
import styled from 'styled-components';

import Glide from '@glidejs/glide';

import { Container } from '../../Container';
import IndivQuote from './IndivQuote';

const AllQuoteContainer = styled(Container)`
  overflow: hidden;
`;

class Quote extends Component {
  

  componentDidMount() {
    new Glide('.glide', {
      type: 'slider',
      startAt: 0,
      perView: 1,
      gap: 0,
      autoplay: 5000,
      hoverpause: true,
    }).mount();
  }

  render() {
    return (
      <AllQuoteContainer {...this.props} className="glide" backColor="green">
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
