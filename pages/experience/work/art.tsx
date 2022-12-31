import { NextSeo } from 'next-seo';
import workPageData from '../../../data/workPageData';
import WorkPage from '../../../components/WorkPage/WorkPage';

const art = () => {
  return (
    <>
      <NextSeo title="Art.com | Anwana Ntofon" />
      <WorkPage work={workPageData} workId={2} />
    </>
  );
};

export default art;
