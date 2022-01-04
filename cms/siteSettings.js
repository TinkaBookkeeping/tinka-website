const settings = {
  name: 'Site Settings',
  label: 'Settings',
  editor: { preview: false },
  label_singular: 'setting',
  files: [
    {
      file: 'config/siteSettings.yaml',
      label: 'Site settings',
      name: 'siteSettings',
      fields: [
        {
          label: 'Offices',
          name: 'offices',
          label_singular: 'Office',
          widget: 'list',
          fields: [
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Phone', name: 'phone', widget: 'string' },
            { label: 'Address', name: 'address', widget: 'text' },
            { label: 'State', name: 'addressRegion', widget: 'text' },
            { label: 'City', name: 'addressLocality', widget: 'text' },
            { label: 'Postcode', name: 'postalCode', widget: 'text' },
            { label: 'Google Map Link', name: 'map', widget: 'string' },
          ],
        },
      ],
    },
  ],
};

export default settings;
