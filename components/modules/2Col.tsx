import Markdown from 'components/Markdown';
import useMediaQuery from 'hooks/useMediaQuery';
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
  <Image
    quality={100}
    width={800}
    height={1200}
    objectFit="contain"
    className="object-cover w-full"
    src={src}
  />
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
}: TwoColProps): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 1280px)');

  return (
    <section className={`relative z-2 ${!isImageFeature && 'py-12'}`}>
      <div className="relative container px-4 mx-auto items-center flex grid xl:grid-cols-12 gap-8 py-10">
        <div
          className={`col-span-12 xl:col-span-5 text-lg ${
            !isImageFeature ? 'xl:col-start-2' : ''
          }`}
        >
          <Markdown content={content} />
        </div>

        <div className="h-full col-span-12 xl:col-span-5 lg:flex justify-center">
          {image && !isImageFeature && <BasicImage src={image} />}
          {image && isImageFeature && isMobile && (
            <div style={{ marginBottom: -220 }}>
              <Image
                quality={100}
                width={800}
                height={1200}
                src={image}
                objectFit="contain"
              />
            </div>
          )}
        </div>
        {image && isImageFeature && !isMobile && <HeroImage src={image} />}
      </div>
    </section>
  );
};

export default TwoCol;
