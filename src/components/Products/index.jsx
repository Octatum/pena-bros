import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '../Container';
import SingleProduct from './SingleProduct';

const ProductContainer = styled(Container)`
  flex-wrap: wrap;

  & > * {
    width: 24%;
  }
`;

const Products = () => (
  <ProductContainer
    flex
    row
    justify="space-between"
    margin={[5, 2]}
    width="auto "
  >
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
        return data.allFile.edges.map((_, index) => {
          const { frontmatter } = _.node.childMarkdownRemark;
          return (
            <SingleProduct
              title={frontmatter.title}
              preview={frontmatter.preview}
              image={frontmatter.image}
              description={frontmatter.description}
              index={index}
            />
          );
        });
      }}
    />
  </ProductContainer>
);

export default Products;
