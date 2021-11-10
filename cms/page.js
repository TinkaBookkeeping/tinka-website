import seo from 'cms/partials/seo';

const page = {
  name: 'Pages',
  label: 'Page',
  editor: { preview: true },
  label_singular: 'Page',
  create: true,
  folder: 'content/pages',
  slug: '{{slug}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  fields: [
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'contact',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default page;
