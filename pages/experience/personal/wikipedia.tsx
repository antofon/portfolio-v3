import { NextSeo } from 'next-seo';
import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const wikipedia = () => {
  return (
    <>
      <NextSeo title="Wikipedia Viewer | Anwana Ntofon" />
      <ProjectPage projects={projectPageData} projectId={2} />
    </>
  );
};

export default wikipedia;
