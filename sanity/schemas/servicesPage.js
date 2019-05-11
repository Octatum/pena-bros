const servicesPage = {
  title: 'Services page',
  name: 'servicePage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Services',
      name: 'services',
      type: 'array',
      of: [{ type: 'service' }],
    },
    {
      title: 'Get a quote text',
      name: 'getAQuote',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
};

export default servicesPage;

export const serviceObject = {
  title: 'Services',
  name: 'service',
  type: 'object',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Service name',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Service image',
      name: 'serviceImage',
      validation: Rule => Rule.required(),
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Services description',
      validation: Rule => Rule.required(),
      name: 'description',
      type: 'text',
    },
  ],
};
