import Markdown from 'components/Markdown';
import Image from 'next/image';

export type TwoColProps = {
  content?: string;
  image?: string;
  isImageFeature: boolean;
};

type ImageType = {
  src: string;
};

const BasicImage = ({ src }: ImageType): JSX.Element => (
  <Image quality={100} width={400} height={400} objectFit="cover" src={src} />
);

const HeroImage = ({ src }: ImageType): JSX.Element => (
  <div className="absolute" style={{ bottom: -140, right: 0, zIndex: 1 }}>
    <Image
      quality={100}
      width={800}
      height={1200}
      objectFit="contain"
      src={src}
    />
  </div>
);
const TwoCol = ({
  content,
  image,
  isImageFeature,
}: TwoColProps): JSX.Element => (
  <section className="relative z-2">
    <div className="relative container px-4 mx-auto items-center flex grid lg:grid-cols-12 gap-8 py-10">
      <div
        className={`col-span-5 text-lg ${
          !isImageFeature ? 'lg:col-start-2' : ''
        }`}
      >
        <Markdown content={content} />
      </div>

      {/* <img
        src={image}
        className="animate-fadeUp"
        style={{
          position: 'absolute',
          bottom: '-50%',
          right: '-50px',
          height: '200%',
          zIndex: 1,
        }}
      /> */}

      <div className="h-full col-span-5 flex justify-center">
        {image && !isImageFeature && <BasicImage src={image} />}
      </div>
      {image && isImageFeature && <HeroImage src={image} />}
    </div>
  </section>
);

export default TwoCol;
