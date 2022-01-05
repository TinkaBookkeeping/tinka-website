import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowRightIcon } from '@heroicons/react/solid';
import useMediaQuery from 'hooks/useMediaQuery';
import MenuButton from 'components/atoms/MenuButton';

type MenuItemProps = {
  label: string;
  href: string;
};
const MenuItem = ({ label, href }: MenuItemProps) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href}>
      <a
        className={`${
          isActive ? 'text-orange-500' : 'text-gray-900'
        } dark:text-white px-6 py-4 font-bold text-5xl md:text-lg md:font-normal hover:text-orange-400 m-0 p-0`}
      >
        {label}
      </a>
    </Link>
  );
};

const Navigation = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 960px)');

  const showMenu = (isMobile && open) || !isMobile;

  return (
    <nav>
      <div
        className="md:hidden flex items-center z-10 absolute z-10 top-0 left-0 w-full"
        style={{ zIndex: 1000 }}
      >
        <MenuButton isOpen={open} onClick={() => setOpen(!open)} />
      </div>

      {showMenu && (
        <div
          className={`
          flex items-center w-full 
          fixed z-10 top-0 mx-auto bg-white drop-shadow-xl py-3 h-full md:h-auto
          ${
            showMenu
              ? ' items-center background-red-100 justify-center '
              : 'hidden md:flex '
          }
          `}
        >
          <div
            className="container mx-auto flex flex-col 
          md:flex-row align-middle"
          >
            <Link href="/">
              <a className="mr-8 mb-20 m-4 md:m-0 flex md:mr-4">
                <img
                  src={'/assets/images/tinka-logo-fat.svg'}
                  alt="TINKA logo"
                  width={125}
                  style={{ width: isMobile ? '80%' : '120px' }}
                />
              </a>
            </Link>

            <MenuItem label="Bookkeeping" href="/bookkeeping" />
            <MenuItem label="Team" href="/team" />
            <MenuItem label="About" href="/about" />
            <div className="w-auto flex" />
            <Link href="/contact">
              <a className="group transition-all border-orange-500 border-2 border-orange py-4 pl-8 pr-3 inline-block bg-orange text-white font-bold text-5xl md:text-lg md:font-normal m-4 md:m-0 md:ml-auto">
                <div className="flex item-center">
                  Get in touch
                  <ArrowRightIcon className="transition-all w-6 h-6 opacity-0 group-hover:ml-5 group-hover:opacity-100" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
