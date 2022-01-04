import ReactMarkdown from 'react-markdown';
import H1 from 'components/atoms/H1';
import H2 from 'components/atoms/H2';

const Markdown = ({ content }: { content: string }): JSX.Element => (
  <ReactMarkdown
    components={{
      h1: ({ children }) => <H1>{children}</H1>,
      h2: ({ children }) => <H2>{children}</H2>,
      ul: ({ children }) => (
        <ul className="list-inside list-disc">{children}</ul>
      ),
      p: ({ children }) => <p className="mb-4">{children}</p>,
    }}
  >
    {content}
  </ReactMarkdown>
);

export default Markdown;
