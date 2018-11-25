import React, { Component } from 'react';
import styled from 'styled-components';

import Glide from '@glidejs/glide';

import { Container } from '../../Container';
import { Image } from '../../Image';
import IndivQuote from './IndivQuote';

import inicial from './assets/initial.svg';
import final from './assets/final.svg';

const AllQuoteContainer = styled(Container)`
  overflow: hidden;
`;

const LeftMark = styled(Image)`
  align-self: flex-start;
  width: 12em;
  position: absolute;
  left: 1em;
  top: 0;
`;

const RightMark = styled(Image)`
  align-self: flex-end;
  width: 10em;
  position: absolute;
  right: 1em;
  bottom: 0;
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
        <LeftMark src={inicial} />
        <div data-glide-el="track" className="glide__track">
          <Container flex row className="glide__slides">
            {this.props.data.allMarkdownRemark.edges.map((data, index) => {
              return (
                <IndivQuote
                  key={index}
                  size={this.props.size}
                  className="glide__slide"
                  author={data.node.frontmatter.title}
                  width="calc(100% - 25em)"
                >
                  {data.node.frontmatter.review}
                </IndivQuote>
              );
            })}
          </Container>
        </div>
        <RightMark src={final} />
      </AllQuoteContainer>
    );
  }
}

export default Quote;
