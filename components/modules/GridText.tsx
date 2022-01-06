import Link from 'next/link';
import H1 from 'components/atoms/H1';

type GridTextProps = {
  title: string;
  subTitle: string;
  columns: {
    title: string;
    content: string;
  }[];
};

const GridText = ({
  title,
  subTitle,
  columns = [],
}: GridTextProps): JSX.Element => (
  <section>
    <div className="container mx-auto lg:px-0 px-4 py-10 lg:py-20">
      <div className="mx-auto items-center lg:flex lg:grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 lg:col-start-2">
          <H1>{title}</H1>
        </div>

        <div className="lg:col-span-6 lg:col-start-0  ">
          <p className="text-xl mb-8">{subTitle}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {columns.map((col, i) => (
              <div key={`grid-col-${i}`}>
                <h3 className="text-2xl font-bold mb-4">{col.title}</h3>
                <p>{col.content}</p>
              </div>
            ))}
          </div>

          <div className="col-span-12">
            <Link href="/contact-us">
              <a className="animate-fadeUp group transition-all border-orange-500 border-2 border-orange py-4 px-8 inline-block bg-orange text-white">
                Find out how
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GridText;
