module.exports = {
  label: 'Testimonial',
  name: 'testimonial',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Title',
      name: 'Title',
      widget: 'string',
      required: true,
      default: 'What do our clients say?',
    },
    {
      label: 'Content',
      name: 'content',
      widget: 'markdown',
      required: true,
    },
    {
      label: 'Persons name',
      name: 'name',
      widget: 'string',
      required: true,
    },
    {
      label: 'Persons role in their company',
      name: 'role',
      widget: 'string',
      required: true,
    },
    {
      label: 'Persons company',
      name: 'company',
      widget: 'string',
      required: true,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
      media_library: { config: { multiple: false } },
    },
  ],
};
