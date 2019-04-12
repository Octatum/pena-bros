const products = {
  title: 'Productos',
  name: 'products',
  type: 'document',
  fields: [
    {
      title: 'Nombre de producto',
      name: 'productName',
      type: 'string',
    },
    {
      title: 'Descripción de producto',
      name: 'productDescription',
      type: 'text',
    },
    {
      title: 'Logo de producto',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Imágen de producto',
      name: 'productImage',
      type: 'image',
    },
  ],
}

export default products;