import seo from 'cms/partials/seo';

const staff = {
  name: 'Staff',
  label: 'Staff',
  editor: { preview: true },
  label_singular: 'Staff',
  create: true,
  folder: 'content/staff',
  slug: '{{name}}',
  extension: 'md',
  format: 'yaml-frontmatter',
  identifier_field: 'name',
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
    {
      label: 'Image',
      name: 'photo',
      widget: 'image',
      required: false,
      media_library: { config: { multiple: false } },
    },
    seo,
  ],
};

export default staff;
