import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav className="container mx-auto">
      <Link href="/">
        <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
      </Link>
      <Link href="/bookkeeping">
        <a className="text-gray-900 dark:text-white px-6 py-4">Bookkeeping</a>
      </Link>
      <Link href="/team">
        <a className="text-gray-900 dark:text-white px-6 py-4">Team</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
