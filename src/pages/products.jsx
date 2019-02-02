import React from 'react';
import Helmet from 'react-helmet';

import PageLayout from '../components/PageLayout';
import Products from '../components/Products';
import QuoteAction from '../components/QuoteAction';

const ProductPage = () => (
  <PageLayout>
    <Helmet title="Our Products" />
   {/*  <Products /> */}
    <QuoteAction />
  </PageLayout>
);

export default ProductPage;
