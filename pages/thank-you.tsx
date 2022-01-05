import React from 'react';
import Layout from 'components/Layout';
import { GetStaticProps } from 'next';

import { getSiteData, Section } from '../lib/api';

import SectionBuilder from 'components/SectionBuilder';
import Head from 'next/head';
import Link from 'next/link';
import H1 from 'components/atoms/H1';

import { CmsWidgetPreviewProps } from 'netlify-cms-core';

export const Index = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title key="title">Thank you</title>
        <meta key="og:title" property="og:title" content={'Thank you'} />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={'Thank you'}
        />
      </Head>
      <div className="container lg:mx-auto mx-4 items-center text-center py-40">
        <H1> Thank you</H1>
        <p className="mb-8">
          One of our representatives will be in touch with you as soon as
          possible.
        </p>

        <Link href="/">
          <a className="animate-fadeUp group transition-all border-orange-500 border-2 border-orange py-4 px-8 inline-block bg-orange text-white">
            <div className="flex item-center">Back to homepage</div>
          </a>
        </Link>
      </div>
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
  return {
    props: { siteData },
  };
};

export default Index;
