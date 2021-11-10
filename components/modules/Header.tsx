import Shape from 'components/atoms/Shape';
import Link from 'next/link';

type HeaderProps = {
  title: string;
  subtitle: string | null;
  photo: string | null;
  buttonLabel: string | null;
  buttonLink: string | null;
};

const Header = ({
  title,
  subtitle,
  photo,
  buttonLabel,
  buttonLink,
}: HeaderProps): JSX.Element => (
  <div
    className="relative"
    style={{
      backgroundColor: '#F8F0E8',
      backgroundImage: 'url(/assets/dot-grid.png)',
    }}
  >
    <div className="bg-gradient-to-b from-orange-100 to-transparent">
      <div
        className="items-center flex h-10 grid lg:grid-cols-2 gap-8 container mx-auto"
        style={{ height: 500 }}
      >
        <div>
          <h1 className="text-7xl font-bold mb-8">{title}</h1>
          <p className="text-lg mb-8">{subtitle}</p>
          {buttonLabel && buttonLink && (
            <p>
              <Link href={buttonLink}>
                <a className="bg-orange-500 text-white p-4 inline-block">
                  {buttonLabel}
                </a>
              </Link>
            </p>
          )}
        </div>

        <div>{photo && <img className="h-1/2 absolute" src={photo} />}</div>
      </div>
    </div>

    <Shape />
  </div>
);

export default Header;
