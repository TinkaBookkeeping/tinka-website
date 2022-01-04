import Shape from 'components/atoms/Shape';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/solid';

const CallToAction = (): JSX.Element => (
  <div className="mt-65">
    <Shape color="blue-500" />
    <section className="bg-blue-500 text-white py-20">
      <div className="container lg:mx-auto mx-4  items-center lg:flex lg:grid lg:grid-cols-2 lg:gap-8">
        <h2 className="font-bold text-5xl text-white mb-8 lg:mb-0">
          Let the experts streamline your booking
        </h2>

        <div className="col-span-3 col-end-6">
          <h3 className="font-bold text-3xl text-white mb-4">
            Get in touch for a free consultation
          </h3>
          <Link href="/contact">
            <a className="group transition-all border-orange-500 border-2 border-orange py-4 pl-8 pr-3 inline-block hover:bg-orange text-white">
              <div className="flex item-center">
                Get in touch
                <ArrowRightIcon className="transition-all w-6 h-6 opacity-0 group-hover:ml-5 delay-100 group-hover:opacity-100" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default CallToAction;
