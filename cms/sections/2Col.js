module.exports = {
  label: '2 Column Layout',
  name: '2col',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Content',
      name: 'content',
      widget: 'markdown',
      required: true,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
      media_library: { config: { multiple: false } },
    },
    {
      label: 'Feature image',
      name: 'isImageFeature',
      widget: 'boolean',
      default: false,
      required: false,
    },
  ],
};
