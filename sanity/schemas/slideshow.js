const slideshow = {
  title: 'Slideshow',
  name: 'slideshow',
  type: 'object',
  fields: [
    {
      name: 'slides',
      title: 'Slides',
      type: 'array',
      validation: Rule => Rule.required().length(3),
      of: [{ type: 'slide' }],
    },
  ],
};

export const slide = {
  title: 'Slide',
  name: 'slide',
  type: 'object',
  preview: {
    select: {
      title: 'description',
      media: 'image',
    },
  },
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: Rule => Rule.required(),
    },
  ],
};

export default slideshow;
