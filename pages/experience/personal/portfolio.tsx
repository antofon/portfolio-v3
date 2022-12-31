import { NextSeo } from 'next-seo';
import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const portfolio = () => {
  return (
    <>
      <NextSeo title="Portfolio | Anwana Ntofon" />
      <ProjectPage projects={projectPageData} projectId={0} />
    </>
  );
};

export default portfolio;
