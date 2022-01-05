const clients = {
  name: 'clients',
  label: 'Clients',
  editor: { preview: false },
  label_singular: 'setting',
  files: [
    {
      file: 'content/clients.yaml',
      label: 'Clients',
      name: 'clients',
      fields: [
        {
          label: 'Clients',
          name: 'clients',
          label_singular: 'Client',
          widget: 'list',
          fields: [
            { label: 'Name', name: 'name', widget: 'string' },
            {
              label: 'Website',
              name: 'website',
              widget: 'string',
              required: false,
            },
            {
              label: 'logo',
              name: 'logo',
              widget: 'image',
              required: false,
              media_library: { config: { multiple: false } },
              hint: 'Size should be 300px x 90px',
            },
          ],
        },
      ],
    },
  ],
};

export default clients;
