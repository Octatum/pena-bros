const services = {
  title: 'Services',
  name: 'services',
  type: 'document',
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Service name',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Service image',
      name: 'serviceImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Services description',
      name: 'description',
      type: 'text',
    },
  ],
};

export default services;
