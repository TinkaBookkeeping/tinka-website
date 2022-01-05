module.exports = {
  label: 'Clients',
  name: 'clients',
  widget: 'object',
  collapsed: false,
  fields: [
    {
      label: 'Limit',
      name: 'limit',
      widget: 'number',
      default: 12,
      value_type: 'int',
      min: 4,
      max: 12,
      step: 1,
    },
  ],
};
