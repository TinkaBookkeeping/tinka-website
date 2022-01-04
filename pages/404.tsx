import Layout from 'components/Layout';
import Link from 'next/link';
export default function NotFound(): JSX.Element {
  return (
    <Layout>
      <div
        className="
        flex
        items-center
        justify-center
        w-screen py-20"
      >
        <div className="px-40 py-20">
          <div className="flex flex-col items-center">
            <span className="text-7xl">🤷‍♂️</span>
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link href="/">
              <a className="border-orange-500 border-2 border-orange py-4 px-8 inline-block bg-orange text-white">
                Go home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
