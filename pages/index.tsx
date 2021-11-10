import { GetStaticProps } from 'next';
import React from 'react';
import Layout from 'components/Layout';
import { getAllPosts, getHomeData, HomeData } from '../lib/api';
import { PostType } from '../types/post';
import Shape from 'components/atoms/Shape';

type IndexProps = {
  posts: PostType[];
  pageData: HomeData;
};

export const Index = ({ pageData }: IndexProps): JSX.Element => {
  return (
    <Layout>
      {JSON.stringify(pageData)}

      <div
        className="relative"
        style={{
          backgroundColor: '#F8F0E8',
          backgroundImage: 'url(/assets/dot-grid.png)',
        }}
      >
        <div className="bg-gradient-to-b from-orange-100 to-transparent">
          <div
            className="items-center flex h-10 grid lg:grid-cols-2 gap-8 container mx-auto"
            style={{ height: 500 }}
          >
            <div>
              <h1 className="text-7xl font-bold mb-8">{pageData.data.title}</h1>
              <p className="text-lg">
                We specialise in working with SMEs across the Digital / Tech /
                Software / eComm / Energy and Medical industries, providing top
                quality bookkeeping
              </p>
            </div>

            <div>
              <img className="h-1/2" src="/assets/hero-image.png" />
            </div>
          </div>
        </div>
        <Shape />
      </div>
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
