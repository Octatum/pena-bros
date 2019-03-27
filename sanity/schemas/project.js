const projectSchema = {
  title: 'Proyecto',
  name: 'project',
  type: 'document',
  fields: [
    {
      title: 'Nombre de proyecto',
      name: 'projectName',
      type: 'string',
    },
    {
      title: 'Nombre de cliente',
      name: 'customerName',
      type: 'string',
    },
    {
      title: 'URL del proyecto',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Imágenes de portada',
      name: 'coverImages',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
  ],
};

export default projectSchema;
