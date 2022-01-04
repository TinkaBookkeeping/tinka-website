import React from 'react';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';

/**
 * Page renders the the same as [slug].tsx
 * without getPagePaths
 *
 * Ideally this would use the same file
 * so that we DRY
 */
import {
  getPageData,
  getSiteData,
  SiteData,
  PageFieldData,
  Section,
} from '../lib/api';

import SectionBuilder from 'components/SectionBuilder';
import Head from 'next/head';

import { CmsWidgetPreviewProps } from 'netlify-cms-core';

type IndexProps = {
  pageData: PageFieldData;
  siteData: SiteData;
};

export const Index = ({ pageData }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title key="title">{pageData?.data?.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={pageData?.data?.title}
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={pageData?.data?.title}
        />
      </Head>
      {pageData?.data?.sections.map(
        (section: Section, index: number) =>
          (<SectionBuilder {...section} key={index} />) as JSX.Element
      )}
    </Layout>
  );
};

export const Preview = ({ entry }: CmsWidgetPreviewProps): JSX.Element => {
  const data = entry
    .getIn(['data', 'sections'])
    .toArray()
    .map((i) => i.toObject()) as Section[];

  return (
    <div className="pointer-events-none bg-white dark:bg-black text-blue-500 dark:text-white">
      {data.map((section: Section, index: number) => (
        <SectionBuilder {...section} key={index} />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const siteData = getSiteData();
  const pageData = getPageData('index');
  if (pageData.data) {
    return {
      props: { pageData, siteData },
    };
  } else {
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }
};

export default Index;
