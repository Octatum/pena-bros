import React, { Component } from 'react';
import styled from 'styled-components';

import Glide from '@glidejs/glide';

import { Container } from '../../Container';
import { Image } from '../../Image';
import IndivQuote from './IndivQuote';

import inicial from './assets/initial.svg';
import final from './assets/final.svg';
import { device } from '../../../utils/device';

const AllQuoteContainer = styled(Container)`
  overflow: hidden;
`;

const LeftMark = styled(Image)`
  align-self: flex-start;
  width: 8em;
  position: absolute;
  left: 1em;
  top: 0;

  ${device.tablet} {
    display: none;
  }
`;

const RightMark = styled(Image)`
  align-self: flex-end;
  width: 8em;
  position: absolute;
  right: 1em;
  bottom: 0;

  ${device.tablet} {
    position: absolute;
    left: calc(100% - 12em);
    bottom: -1em;
  }
`;

class Quote extends Component {
  componentDidMount() {
    new Glide('.quoteGlide', {
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
      <AllQuoteContainer
        {...this.props}
        className="quoteGlide"
        backColor="green"
      >
        <LeftMark src={inicial} />
        <div data-glide-el="track" className="glide__track">
          <Container
            flex
            row
            align="flex-start"
            height="auto"
            tMargin={[0, 0, 6, 0]}
            className="glide__slides"
          >
            {this.props.data.map(review => (
              <IndivQuote
                key={review.name}
                size={this.props.size}
                className="glide__slide"
                author={review.name}
                width="calc(100% - 25em)"
                tWidth="100%"
                height="auto"
              >
                {review.review}
              </IndivQuote>
            ))}
          </Container>
        </div>
        <RightMark src={final} />
      </AllQuoteContainer>
    );
  }
}

export default Quote;
