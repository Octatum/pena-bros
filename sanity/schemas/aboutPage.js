const aboutPage = {
  title: 'About page',
  name: 'aboutPage',
  type: 'document',
  fields: [
    {
      title: 'Page title',
      name: 'title',
      validation: Rule => Rule.required(),
      type: 'string',
    },
    {
      title: 'Pena Bros Upholstery subtext',
      name: 'text1',
      validation: Rule => Rule.required(),
      type: 'text',
    },
    {
      title: 'Section 2 text',
      name: 'text2',
      validation: Rule => Rule.required(),
      type: 'text',
    },
    {
      title: 'Who are we?',
      name: 'text3',
      validation: Rule => Rule.required(),
      type: 'text',
    },
    {
      title: 'Get a quote text',
      validation: Rule => Rule.required(),
      name: 'getAQuote',
      type: 'string',
    },
  ],
};

export default aboutPage;
