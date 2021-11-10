// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import dynamic from 'next/dynamic';
import Head from 'next/head';

import config from 'cms/config';
import { DefaultLayoutPreview } from 'components/layouts/Default';
import { StaffLayoutPreview } from 'components/layouts/Staff';

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {
      cms.init({ config });

      cms.registerPreviewTemplate('Pages', DefaultLayoutPreview);
      cms.registerPreviewTemplate('Staff', StaffLayoutPreview);
      cms.registerPreviewStyle(
        'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
      );
      cms.registerPreviewStyle(
        'https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css'
      );
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
