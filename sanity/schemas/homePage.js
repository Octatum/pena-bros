const homePage = {
  title: 'Home page',
  name: 'homePage',
  type: 'document',
  fields: [
    {
      title: 'Slideshow',
      name: 'homeSlideshow',
      type: 'slideshow',
    },
    {
      name: 'subtext1',
      type: 'string',
      title: 'Subtext 1',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subtext2',
      type: 'text',
      title: 'Subtext 2',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Works',
      name: 'works',
      type: 'array',
      validation: Rule => Rule.required().length(3),
      options: {
        editModal: 'popover',
      },
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'ourWorks',
            },
          ],
        },
      ],
    },
    {
      title: 'Customer reviews',
      name: 'customerReviews',
      validation: Rule => Rule.required().min(2),
      type: 'array',
      of: [
        {
          type: 'customerReview',
        },
      ],
    },
    { name: 'quote', type: 'string', title: 'Get a quote text' },
  ],
};

export const customerQuote = {
  title: 'Customer review',
  name: 'customerReview',
  type: 'object',
  fields: [
    {
      title: 'Customer name',
      name: 'name',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      title: 'Review',
      name: 'review',
      validation: Rule => Rule.required(),
      type: 'text',
    },
  ],
};

export default homePage;
