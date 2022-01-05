import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import 'styles/globals.css';
import SettingsProvider from 'context/SiteSettings';
import GlobalContentContext from 'context/GlobalContentContext';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <SettingsProvider>
      <GlobalContentContext>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContentContext>
    </SettingsProvider>
  );
};

export default MyApp;
