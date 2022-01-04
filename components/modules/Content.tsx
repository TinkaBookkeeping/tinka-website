//import { serialize } from 'next-mdx-remote/serialize';
import Markdown from 'components/Markdown';

export type ContentProps = {
  content?: string;
};

const Content = ({ content }: ContentProps): JSX.Element => {
  return (
    <div className="container mx-auto px-4 lg:px-0 text-xl py-20">
      <Markdown content={content} />
    </div>
  );
};

export default Content;
