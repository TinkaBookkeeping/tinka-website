const pageAttributes = {
  label: 'Page Attributes',
  name: 'pageAttributes',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Slug',
      name: 'slugs',
      widget: 'string',
      required: false,
      hint: 'The "Slug" is the path to the page e.g. https://domain.com/{slug}',
    },
    {
      label: 'Published Date',
      name: 'publish_date',
      widget: 'datetime',
      default: new Date(),
      required: false,
    },
  ],
};

export default pageAttributes;
