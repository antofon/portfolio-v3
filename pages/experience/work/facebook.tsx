import { NextSeo } from 'next-seo';
import workPageData from '../../../data/workPageData';
import WorkPage from '../../../components/WorkPage/WorkPage';

const facebook = () => {
  return (
    <>
      <NextSeo title="Facebook | Anwana Ntofon" />
      <WorkPage work={workPageData} workId={1} />
    </>
  );
};

export default facebook;
