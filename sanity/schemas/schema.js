// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import aboutPage from './aboutPage';
import { contactPage } from './defaultPage';
import homePage, { customerQuote } from './homePage';
import productsPage, { product } from './productsPage';
import servicesPage, { serviceObject } from './servicesPage';
import slideshow, { slide } from './slideshow';
import works, { worksPage } from './works';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ...[homePage, customerQuote, slideshow, slide],
    ...[aboutPage],
    ...[servicesPage, serviceObject],
    ...[contactPage],
    ...[productsPage, product],
    ...[works, worksPage],
  ]),
});
