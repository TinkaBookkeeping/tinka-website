import Link from 'next/link';
import { useSiteSettings } from 'context/SiteSettings';

type MenuItemProps = {
  label: string;
  href: string;
};

const FooterLink = ({ href, label }: MenuItemProps) => (
  <Link href={href}>
    <a className="dark:text-white animate-fadeUp font-bold text-base md:font-normal text-blue-500 hover:text-orange-400 block">
      {label}
    </a>
  </Link>
);

const Footer = (): JSX.Element => {
  const { offices } = useSiteSettings();
  return (
    <footer className="bg-white">
      <div className="container lg:mx-auto mx-4 md:grid md:grid-cols-2 gap-4 py-10">
        <div>
          <h5 className="text-large font-bold mb-2">TINKA</h5>

          <nav>
            <ul>
              <FooterLink label="Home" href="/" />
              <FooterLink label="Bookkeeping" href="/bookkeeping" />
              <FooterLink label="Our team" href="/team" />
              <FooterLink label="About us" href="/about" />
              <FooterLink label="Contact us" href="/contact" />
            </ul>
          </nav>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {offices.map((office, index) => (
            <div
              key={index}
              className="mb-8"
              itemScope
              itemType="http://schema.org/LegalService"
            >
              <a href={office.map} target="_blank" rel="noreferrer">
                <h5 className="text-xl font-bold mb-4" itemProp="name">
                  TINKA {office.title}
                </h5>
              </a>
              <a href={`tel:${office.phone}`} itemProp="telephone">
                {office.phone}
              </a>
              <a
                href={'maps://?q=323482,4306480'}
                target="_blank"
                rel="noreferrer"
              >
                <p
                  style={{ whiteSpace: 'pre-line' }}
                  className="text-base"
                  itemProp="address"
                >{`${office.address}`}</p>
                <p>
                  <span itemProp="addressLocality">
                    {office.addressLocality}
                  </span>
                  , <span itemProp="addressRegion">{office.addressRegion}</span>
                  , <span itemProp="postalCode">{office.postalCode}</span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="container mx-auto grid grid-cols-2 gap-4 py-10 px-4 lg:px-0">
        <img
          src="/assets/images/tinka-logo-fat.svg"
          alt="TINKA logo"
          width={125}
        />
      </div>
    </footer>
  );
};

export default Footer;
