import * as React from 'react';
const data = require('config/siteSettings.yaml');
import { SiteSettings } from 'types/layout';

const sampleAppContext: SiteSettings = data;

const AppCtx = React.createContext<SiteSettings>(sampleAppContext);

const Provider = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => (
  <AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>
);

export const useSiteSettings = () => React.useContext(AppCtx);

export default Provider;
