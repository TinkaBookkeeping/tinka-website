import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Hunter Chang - Website',
    description:
      'Sleep Deprived Father. Senior Web Developer. Lover of all things Ramen and Kpop.',
    image: `${WEBSITE_HOST_URL}/images/site-preview.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title key="title">{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:site_name" content="Hunter Chang - Website" />
      <meta key="og:type" property="og:type" content={meta.type} />
      <meta
        key="og:description"
        property="og:description"
        content={meta.description}
      />
      <meta key="og:title" property="og:title" content={meta.title} />
      <meta key="og:image" property="og:image" content={meta.image} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content="@huntarosan" />
      <meta key="twitter:title" name="twitter:title" content={meta.title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={meta.description}
      />
      <meta key="twitter:image" name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </NextHead>
  );
};

export default Head;
