// https://www.npmjs.com/package/next-sitemap
import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getPagePaths } from '../../lib/api';
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const paths = getPagePaths();
  return getServerSideSitemapIndex(ctx, paths);
};

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function SitemapIndex() {}
