module.exports = {
  label: 'Grid Text',
  name: 'grid-text',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    {
      label: 'Sub Title',
      name: 'subTitle',
      widget: 'string',
    },
    {
      label: 'Columns',
      name: 'columns',
      widget: 'list',
      fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Content', name: 'content', widget: 'string' },
      ],
    },
  ],
};
