import React from 'react';
import Layout from 'components/Layout';
import Header from 'components/modules/Header';
import TeamMember from 'components/modules/TeamMember';
import { GetStaticProps } from 'next';
import { getTeamMembers, TeamListData } from 'lib/api';

type TeamPageProps = {
  pageData: [TeamListData];
};

export const TeamPage = ({ pageData }: TeamPageProps): JSX.Element => (
  <Layout>
    <Header
      title={'We hired the best so you don’t have to'}
      subtitle={
        'From number crunches to coordinating brunches, our team of experts are ready to make the hassle of bookkeeping a thing of the past by delivering a level of service that surpasses the competition'
      }
      photo={''}
      buttonLabel={'Put the team to work'}
      buttonLink={'/contact'}
      style={'alt'}
    />

    <div className="container mx-auto pt-12 px-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {pageData.map((m) => (
        <TeamMember
          key={m.slug}
          name={m.pageData.data.name}
          role={m.pageData.data.role}
          photo={m.pageData.data.photo}
        />
      ))}
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const pageData = getTeamMembers();
  return {
    props: {
      pageData,
    },
  };
};

export default TeamPage;
