type DefaultLayoutProps = {
  pageData: {
    title: string;
  };
};

type LayoutType = {
  entry: any;
};

const DefaultLayout = ({ pageData }: DefaultLayoutProps): JSX.Element => {
  return (
    <div className="text-base text-red-400 bg-orange-500">
      I am a preview {pageData?.title || '?'}
    </div>
  );
};

export default DefaultLayout;

export const DefaultLayoutPreview = ({ entry }: LayoutType): JSX.Element => {
  const title = entry.getIn(['data', 'title']);
  const data: DefaultLayoutProps = {
    pageData: {
      title,
    },
  };
  return (
    <div className="bg-white dark:bg-black text-blue-500 dark:text-white">
      <DefaultLayout {...data} />
    </div>
  );
};
