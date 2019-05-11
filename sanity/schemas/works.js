const works = {
  title: 'Our works',
  name: 'ourWorks',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Cover image',
      name: 'cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
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
      validation: Rule => Rule.required(),
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

export const worksPage = {
  title: 'Works page',
  name: 'worksPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom text',
      name: 'bottomText',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Bottom content',
      name: 'bottomContent',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Get a quote text',
      name: 'getAQuote',
      type: 'text',
      validation: Rule => Rule.required(),
    },
  ],
};
