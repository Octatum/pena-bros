const productsPage = {
  title: 'Products page',
  name: 'productsPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [{ type: 'product' }],
    },
    {
      title: 'Get a quote text',
      name: 'getAQuote',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};

export default productsPage;

export const product = {
  title: 'Products',
  name: 'product',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Body image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
