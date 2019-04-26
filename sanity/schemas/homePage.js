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
    { name: 'subtext1', type: 'string', title: 'Subtext 1' },
    { name: 'subtext2', type: 'text', title: 'Subtext 2' },
    {
      title: 'Works',
      name: 'works',
      type: 'array',
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
      type: 'string',
    },
    {
      title: 'Review',
      name: 'review',
      type: 'text',
    },
  ],
};

export default homePage;
