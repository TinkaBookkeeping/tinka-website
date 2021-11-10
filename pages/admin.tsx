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
      CMS.registerPreviewStyle('styles/global.css');
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
      </Head>

      <CMS />
    </>
  );
};

export default AdminPage;
