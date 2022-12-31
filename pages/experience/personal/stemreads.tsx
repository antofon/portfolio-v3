import { NextSeo } from 'next-seo';
import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const stemreads = () => {
  return (
    <>
      <NextSeo title="StemReads | Anwana Ntofon" />
      <ProjectPage projects={projectPageData} projectId={1} />
    </>
  );
};

export default stemreads;
