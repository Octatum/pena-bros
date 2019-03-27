const works = {
  title: 'Our works',
  name: 'ourWorks',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Cover image',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: 'Creation date',
      name: 'createDate',
      type: 'date',
    },
    {
      title: 'Sorting priority',
      name: 'priority',
      type: 'number',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          'Auto Carpet',
          'Convertible Top',
          'Door Panel',
          'Headliner',
          'Rod Wire',
          'Leather Interiors',
        ],
      },
    },
  ],
};

export default works;
