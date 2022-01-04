module.exports = {
  label: 'Header Image',
  name: 'header',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'text',
      required: true,
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      widget: 'string',
      required: false,
    },
    {
      label: 'Style',
      name: 'style',
      widget: 'select',
      options: ['light', 'dark', 'alt'],
      default: 'light',
      hint: 'Changes the background and text color',
    },
    {
      label: 'Button label',
      name: 'buttonLabel',
      widget: 'string',
      required: false,
      hint: 'The text that appears in the "Call to action" button',
    },
    {
      label: 'Button link',
      name: 'buttonLink',
      widget: 'string',
      required: false,
      hint: 'Where the "Call to action" button will link too',
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
