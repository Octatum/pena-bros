import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '../Container';

const Products = () => (
  <Container>
    <StaticQuery
      query={graphql``}
      render={data => {
        return (
          <Container>
          </Container>
        )
      }}
    />
  </Container>
)

export default Products;