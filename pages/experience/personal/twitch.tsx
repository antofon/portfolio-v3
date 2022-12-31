import { NextSeo } from 'next-seo';
import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const twitch = () => {
  return (
    <>
      <NextSeo title="Twitch Viewer | Anwana Ntofon" />
      <ProjectPage projects={projectPageData} projectId={3} />
    </>
  );
};

export default twitch;
