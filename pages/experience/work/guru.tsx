import { NextSeo } from 'next-seo';
import workPageData from '../../../data/workPageData';
import WorkPage from '../../../components/WorkPage/WorkPage';

const guru = () => {
  return (
    <>
      <NextSeo title="Guru | Anwana Ntofon" />
      <WorkPage work={workPageData} workId={0} />
    </>
  );
};

export default guru;
