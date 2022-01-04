import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/globals.css';
import SettingsProvider from 'context/SiteSettings';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <SettingsProvider>
      <ThemeProvider
        attribute="class"
        enableSystem={false}
        defaultTheme="light"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </SettingsProvider>
  );
};

export default MyApp;
