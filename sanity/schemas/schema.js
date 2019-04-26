// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import homePage, { customerQuote } from './homePage';
import slideshow, { slide } from './slideshow';
import works from './works';
import services from './services';
import products from './products';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    ...[homePage, customerQuote, slideshow, slide],
    ...[works],
    ...[services],
    ...[products],
  ]),
});