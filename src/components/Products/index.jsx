import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GatsbyImage from "gatsby-image"
import styled from 'styled-components';
import { Container } from '../Container';
import { Image } from '../Image';
import SingleProduct from './SingleProduct';
import { device } from '../../utils/device';
import Arrows from '../Arrows';

const AllProductsContainer = styled(Container)`
  ${device.tablet} {
    justify-content: center;
    align-items: flex-end;
  }
`;
const SingleProductComponent = styled(SingleProduct)`
  ${device.tablet} {
    background-color: transparent;
  }
`;
const Selection = styled(Container)`
  ${device.tablet} {
    background-color: ${({ theme }) => theme.color.green};
  }
`;
const TabSelection = styled(Container)`
  ${device.tablet} {
    background-color: black;
  }
`;

const ArrowContainer = styled(Container).attrs({
  flex: true,
  align: 'center',
  justify: 'center',
})`
  width: 7em;
  display: none;
  align-self: center;

  div {
    transform: scale(1.25);
  }

  ${device.tablet} {
    width: 5em;
    display: flex;
    div {
      transform: scale(1);
    }
  }
`;

const Tabs = styled(Container)`
  overflow-x: auto;
  width: calc(100% - 14em);

  ${device.tablet} {
    width: calc(100% - 10em);
    overflow: hidden;
  }
  & > div {
    ${device.tablet} {
      transition: transform 1s ease;

      transform: ${({ current, total }) =>
        `translateX(-${(current / total) * 100}%)`};
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
    let next =
      (this.state.currentViewed + 1) % this.props.data.allSanityProducts.edges.length;

    this.setState({
      currentViewed: next,
    });
  }

  handleSelectPrev() {
    let prev =
      (this.state.currentViewed - 1 + this.props.data.allSanityProducts.edges.length) %
      this.props.data.allSanityProducts.edges.length;

    this.setState({
      currentViewed: prev,
    });
  }

  clickSelection(e, index) {
    this.setState({
      currentViewed: index,
    });
  }

  render() {
    const current = this.props.data.allSanityProducts.edges[this.state.currentViewed].node;

    return (
      <Container
        margin={[5, 3]}
        tMargin={[0, 0, 5, 0]}
        width="auto"
        height="auto"
      >
        <Selection flex row tPadding={[5, 0, 0, 0]}>
          <ArrowContainer>
            <Arrows
              left
              onClick={this.handleSelectPrev}
              arrowColors={['white', 'white']}
            />
          </ArrowContainer>

          <Tabs
            current={this.state.currentViewed}
            total={this.props.data.allSanityProducts.edges.length}
          >
            <AllProductsContainer
              flex
              row
              justify="flex-start"
              width="auto"
              tWidth={`${50 * this.props.data.allSanityProducts.edges.length}%`}
              height="auto"
              align="initial"
            >
              {this.props.data.allSanityProducts.edges.map((_, index) => {
                const { id, logo } = _.node;
                console.log(id, logo)
                return (
                  <TabSelection
                    flex
                    key={id}
                    onClick={e => this.clickSelection(e, index)}
                    backColor={
                      this.state.currentViewed === index ? 'green' : 'black'
                    }
                    padding={[1, 2.5]}
                    tPadding={
                      this.state.currentViewed === index ? [2, 1] : [1, 1]
                    }
                    mPadding={
                      this.state.currentViewed === index
                        ? [1.5, 0.75]
                        : [0.75, 0.75]
                    }
                    width="auto"
                    tWidth="50%"
                    height="auto"
                    style={{ cursor: 'pointer' }}
                  >
                    <GatsbyImage
                      fixed={logo.asset.fixed}
                    />
                  </TabSelection>
                );
              })}
            </AllProductsContainer>
          </Tabs>

          <ArrowContainer>
            <Arrows
              onClick={this.handleSelectNext}
              arrowColors={['white', 'white']}
            />
          </ArrowContainer>
        </Selection>

        <SingleProductComponent
          height="auto"
          title={current.productName}
          preview={current.logo}
          image={current.productImage}
          description={current.productDescription}
          backColor="green"
        />
      </Container>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
    query getAllProducts {
      allSanityProducts {
        edges {
          node {
            id
            logo {
              asset {
                fixed(width: 100) {
                  ...GatsbySanityImageFixed_noBase64
                }
              }
            }
            productDescription
            productImage {
              asset {
                fluid(maxWidth: 1000, maxHeight: 500) {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
            productName
          }
        }
      }
    }
    `}
    render={data => <Products data={data} {...props} />}
  />
);