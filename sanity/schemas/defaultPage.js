const defaultPage = {
  title: 'Default Page',
  name: 'defaultPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Get a quote text',
      name: 'getAQuote',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};

export default defaultPage;

export const contactPage = {
  title: 'Contact Page',
  name: 'contactPage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Get a quote text',
      name: 'getAQuote',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Phone number',
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required().max(15),
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};
