// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import dynamic from 'next/dynamic';
import Head from 'next/head';

import config from 'cms/config';
import { Preview } from 'pages/[slug]';
import { StaffLayoutPreview } from 'components/layouts/Staff';

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config });

      cms.registerPreviewTemplate('Pages', Preview);
      cms.registerPreviewTemplate('Staff', StaffLayoutPreview);
      cms.registerPreviewStyle('preview.css');
    }),
  {
    ssr: false,
    loading: () => null,
  }
);

const AdminPage = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link rel="stylesheet" src="preview.css"></link>
      </Head>

      <CMS />
    </>
  );
};

export default AdminPage;
