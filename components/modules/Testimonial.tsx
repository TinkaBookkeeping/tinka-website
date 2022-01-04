import Markdown from 'components/Markdown';
import Image from 'next/image';
import H1 from 'components/atoms/H1';
import Shape from 'components/atoms/Shape';

export type TwoColProps = {
  title: string;
  content: string;
  name: string;
  role: string;
  company: string;
  image?: string;
};

const Testimonial = ({
  content,
  image,
  title = 'What do our clients say?',
  name,
  role,
  company,
}: TwoColProps): JSX.Element => (
  <section
    className="bg-orange-100 relative overflow-hidden"
    style={{ marginTop: -85, marginBottom: -240, zIndex: -1 }}
  >
    <Shape color={'white'} direction="right" />
    <div
      className=""
      style={{
        backgroundImage: 'url(/assets/images/dot.png)',
        backgroundAttachment: 'fixed',
        top: -150,
        left: 0,
        width: '100%',
        height: '200%',
        position: 'absolute',
      }}
    />
    <div className="relative px-4 container mx-auto items-center flex grid grid-cols-1 md:grid-cols-12 md:gap-8 py-0">
      <div className="col-span-12 md:col-span-4 lg:col-start-2 text-lg py-14">
        <H1>{title}</H1>
        <blockquote className="relative">
          <div className="stylistic-quote-mark" aria-hidden="true">
            &ldquo;
          </div>
          <Markdown content={content} />
        </blockquote>
        <div className="text-right">
          <p>{name}</p>
          <p className="font-bold">
            {role}
            <br />
            {company}
          </p>
        </div>
      </div>

      <div className="relative h-full md:col-span-5 flex justify-center">
        {image && (
          <div className="aspect-square">
            <Image
              quality={100}
              width={400}
              height={400}
              objectFit="contain"
              src={image}
            />
          </div>
        )}
      </div>
    </div>
    <Shape color={'orange-100'} direction="left" />
  </section>
);

export default Testimonial;
