const slideshow = {
  title: 'Slideshow',
  name: 'slideshow',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{ type: 'slide' }],
    },
  ],
};

export const slide = {
  title: 'Slide',
  name: 'slide',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    { name: 'description', type: 'text', title: 'Description' },
  ],
};

export default slideshow;
