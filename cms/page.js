import seo from 'cms/partials/seo';
import pageAttributes from 'cms/partials/pageAttributes';

import PageHeader from 'cms/sections/PageHeader';
import TwoCol from 'cms/sections/2Col';
import ContactForm from 'cms/sections/ContactForm';
import Testimonial from 'cms/sections/Testimonial';

const page = {
  name: 'Pages',
  label: 'Page',
  editor: { preview: true },
  label_singular: 'Page',
  create: true,
  folder: 'content/pages',
  slug: '{{slug}}',
  preview_path: '{{slug}}',
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
    {
      label: 'Sections',
      name: 'sections',
      label_singular: 'Section',
      widget: 'list',
      types: [
        PageHeader,
        TwoCol,
        Testimonial,
        ContactForm,
        {
          label: 'Content',
          name: 'content',
          widget: 'object',
          fields: [
            {
              label: 'Content',
              name: 'content',
              widget: 'markdown',
              required: true,
            },
          ],
        },
      ],
    },
    pageAttributes,
    seo,
  ],
};

export default page;
