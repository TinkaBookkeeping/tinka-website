import Shape from 'components/atoms/Shape';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/solid';

export type HeaderProps = {
  title: string;
  subtitle: string | null;
  photo: string | null;
  buttonLabel: string | null;
  buttonLink: string | null;
  style: 'light' | 'dark' | 'alt';
};

/*
background: radial-gradient(circle, #4f46e5 10%, transparent 11%);
        background-size: 1em 1em;
        background-color: #f9f9ff;
        opacity: 0.65
*/

const dotsLight = {
  background:
    'radial-gradient(circle, rgba(49, 51, 77, 0.3) 10%, transparent 11%)',
};
const dotsDark = {
  background:
    'radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, transparent 11%)',
};
const dotsAlt = {
  background:
    'radial-gradient(circle, rgba(49, 51, 77, 0.3) 10%, transparent 11%)',
};

const Header = ({
  title,
  subtitle,
  photo,
  buttonLabel,
  buttonLink,
  style,
}: HeaderProps): JSX.Element => {
  const background =
    style === 'light' ? 'orange-100' : style === 'dark' ? 'blue-500' : 'alt';

  const dots =
    style === 'light' ? dotsLight : style === 'dark' ? dotsDark : dotsAlt;

  const text = style === 'dark' ? 'white' : 'blue-500';

  return (
    <div className={` z-0 bg-${background}`}>
      <div
        className="pt-36 md:pt-10"
        style={{
          ...dots,
          backgroundSize: '1em 1em',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className={`bg-gradient-to-t from-${background} to-transparent`}>
          <div
            // className="items-center lg:flex lg:h-10 lg:grid lg:grid-cols-12 gap-8 container mx-auto lg:px-0 px-4 py-10"
            className="items-center lg:flex lg:grid lg:grid-cols-12 gap-8 container mx-auto lg:px-0 px-4 py-0"
          >
            <div className="lg:col-span-5">
              <h1
                style={{ whiteSpace: 'pre-line' }}
                className={`animate-fadeUp md:text-7xl text-3xl font-bold mb-8 text-${text}`}
              >
                {title}
              </h1>
              <p className={`animate-fadeUp text-lg mb-8 text-${text}`}>
                {subtitle}
              </p>
              {buttonLabel && buttonLink && (
                <Link href={buttonLink}>
                  <a className="animate-fadeUp group transition-all border-orange-500 border-2 border-orange py-4 pl-8 pr-3 inline-block bg-orange text-white">
                    <div className="flex item-center">
                      {buttonLabel}
                      <ArrowRightIcon className="transition-all w-6 h-6 opacity-0 group-hover:ml-5 group-hover:opacity-100" />
                    </div>
                  </a>
                </Link>
              )}
            </div>

            <div className="relative h-full col-span-7">
              {photo && (
                <Image
                  quality={100}
                  src={photo}
                  width={700}
                  height={700}
                  //layout="responsive"
                  objectFit="contain"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Shape color={'white'} />
    </div>
  );
};

export default Header;
