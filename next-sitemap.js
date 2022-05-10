/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.URL || 'http://tinkabookkeeping.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml', '/cms'],
};
