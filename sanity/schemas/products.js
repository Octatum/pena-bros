const products = {
  title: 'Products',
  name: 'products',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'productName',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'productDescription',
      type: 'text',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Body image',
      name: 'productImage',
      type: 'image',
    },
  ],
};

export default products;
