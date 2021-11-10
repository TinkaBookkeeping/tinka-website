type HeaderProps = {
  content?: string;
};

const Content = ({ content }: HeaderProps): JSX.Element => (
  <div className="container mx-auto text-lg">{content}</div>
);

export default Content;
