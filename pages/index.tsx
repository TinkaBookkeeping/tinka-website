import { GetStaticProps } from 'next';
import React from 'react';
import Layout from 'components/Layout';
import { getAllPosts, getHomeData, PageFieldData, Section } from '../lib/api';
import { PostType } from '../types/post';

import SectionBuilder from 'components/SectionBuilder';
import Head from 'next/head';

type IndexProps = {
  posts: PostType[];
  pageData: PageFieldData;
};

export const Index = ({ pageData }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title key="title">{pageData.data.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={pageData.data.title}
        />
        <meta
          key="twitter:title"
          property="twitter:title"
          content={pageData.data.title}
        />
      </Head>
      {/* {JSON.stringify(pageData)} */}

      {pageData.data.sections.map(
        (section: Section, index: number) =>
          (<SectionBuilder {...section} key={index} />) as JSX.Element
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);
  const pageData = getHomeData();
  return {
    props: { posts, pageData },
  };
};

export default Index;
