import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import GiveAway from './modules/GiveAway';
import CallToAction from 'components/modules/CallToAction';
import Footer from 'components/modules/Footer';
//import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />

      <header>
        <Navigation />
        {/* <ThemeSwitch /> */}
      </header>

      <main className="md:pt-20">{children}</main>

      <CallToAction />
      <GiveAway />
      <Footer />
    </>
  );
};

export default Layout;
