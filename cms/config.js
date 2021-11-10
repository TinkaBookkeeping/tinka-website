import page from 'cms/page';
import staff from 'cms/staff';

module.exports = {
  // We want to manually init the config file
  cms_manual_init: true,

  // Backend configuration, in this case with git
  backend: {
    name: 'git-gateway',
    branch: 'master',
    squash_merges: true,
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: 'public/images/',

  // Where to link the images
  public_folder: 'public/images/',

  // The Pages collection
  collections: [page, staff],
};
