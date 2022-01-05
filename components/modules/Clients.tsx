import { useGlobalContent, Client } from 'context/GlobalContentContext';
import Image from 'next/image';

const Wrapper = ({
  website,
  children,
}: {
  website?: string;
  children?: JSX.Element;
}): JSX.Element =>
  website ? (
    <a href={website} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <div>{children}</div>
  );

const ClientItem = ({ name, website, logo }: Client) => (
  <Wrapper website={website}>
    <Image src={logo} width={300} height={90} alt={`${name} logo`} />
  </Wrapper>
);

const Clients = ({ limit = 120 }: { limit: number }): JSX.Element => {
  const { clients } = useGlobalContent();
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 py-20 px-4">
      {clients.slice(0, limit).map((c) => (
        <ClientItem
          key={c.name}
          name={c.name}
          website={c.website}
          logo={c.logo}
        />
      ))}
    </div>
  );
};

export default Clients;
