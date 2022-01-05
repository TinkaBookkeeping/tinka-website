import page from 'cms/page';
import staff from 'cms/staff';
import clients from 'cms/clients';
import settings from 'cms/siteSettings';

module.exports = {
  // We want to manually init the config file
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: 'git-gateway',
    branch: 'main',
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: '/public/media/',

  // Where to link the images
  public_folder: '/media/',

  // The Pages collection
  collections: [page, staff, clients, settings],
};
