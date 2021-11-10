module.exports = {
  label: 'Header Image',
  name: 'header',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: true,
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Button label',
      name: 'buttonLabel',
      widget: 'string',
      required: false,
    },
    {
      label: 'Button link',
      name: 'buttonLink',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'photo',
      widget: 'image',
      required: false,
      media_library: { config: { multiple: false } },
    },
  ],
};
