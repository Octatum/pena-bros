import React from 'react';
import Helmet from 'react-helmet';

import PageLayout from '../components/PageLayout';
import Products from '../components/Products';

const ProductPage = () => (
  <PageLayout>
    <Helmet title="Our Products" />
    <Products />
  </PageLayout>
);

export default ProductPage;
