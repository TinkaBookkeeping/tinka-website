import seo from 'cms/partials/seo';

const staff = {
  name: 'Staff',
  label: 'Staff',
  editor: { preview: true },
  label_singular: 'Staff',
  create: true,
  folder: 'content/staff',
  slug: '{{slug}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  fields: [
    {
      label: 'Name',
      name: 'name',
      widget: 'string',
      default: '',
      required: false,
    },
    {
      label: 'Role',
      name: 'role',
      widget: 'string',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default staff;
