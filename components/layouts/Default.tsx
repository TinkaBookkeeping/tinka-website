import Layout from 'components/Layout';

type DefaultLayoutProps = {
  pageData: {
    title: string;
  };
};

const DefaultLayout = ({ pageData }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className="text-base text-red-400">
      I am a preview {pageData?.title || '?'}
    </div>
  );
};

export default DefaultLayout;

export const DefaultLayoutPreview = ({ entry }) => {
  const title = entry.getIn(['data', 'title']);
  const data: DefaultLayoutProps = {
    pageData: {
      title,
    },
  };
  return <DefaultLayout {...data} />;
};
