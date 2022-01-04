type DefaultLayoutProps = {
  pageData: {
    data: {
      name: string;
      role: string;
      photo: string;
    };
  };
};

const StaffLayout = ({ pageData }: DefaultLayoutProps): JSX.Element => {
  return (
    <div>
      <div
        className="relative"
        style={{
          backgroundColor: '#F8F0E8',
          backgroundImage: 'url(/assets/dot-grid.png)',
        }}
      >
        <div className="bg-gradient-to-b from-orange-100 to-transparent">
          <div
            className="items-center flex h-10 grid lg:grid-cols-2 gap-8 container mx-auto"
            style={{ height: 500 }}
          >
            <div>
              <h1 className="text-7xl font-bold mb-8">{pageData.data.name}</h1>
              <p className="text-lg">
                We specialise in working with SMEs across the Digital / Tech /
                Software / eComm / Energy and Medical industries, providing top
                quality bookkeeping.
              </p>
            </div>

            <div>
              <img className="h-1/2" src={pageData.data.photo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffLayout;

export const StaffLayoutPreview = ({ entry }: { entry: any }): JSX.Element => {
  const name = entry.getIn(['data', 'name']);
  const role = entry.getIn(['data', 'role']);
  const photo = entry.getIn(['data', 'photo']);
  const data: DefaultLayoutProps = {
    pageData: {
      data: {
        name,
        role,
        photo,
      },
    },
  };
  return <StaffLayout {...data} />;
};
