import * as React from 'react';
const data = require('content/clients.yaml');

export type Client = {
  name: string;
  website?: string;
  logo: string;
};

type GlobalContent = {
  clients: Client[];
};

const sampleAppContext: GlobalContent = data;

const AppCtx = React.createContext<GlobalContent>(sampleAppContext);

const Provider = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => (
  <AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>
);

export const useGlobalContent = () => React.useContext(AppCtx);

export default Provider;
