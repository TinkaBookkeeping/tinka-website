import React from 'react';
import Layout from 'components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';

import {
  getPageData,
  getPagePaths,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const arr = getPagePaths();
  const paths = arr.map((slug) => {
    return {
      params: {
        slug: slug,
      },
    };
  });
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const path = Array.isArray(slug) ? slug[0] : slug; // TODO:
  const siteData = getSiteData();
  const pageData = getPageData(path || 'home');
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
