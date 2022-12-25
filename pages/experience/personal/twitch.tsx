import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const twitch = () => {
  return (
    <>
      <ProjectPage projects={projectPageData} projectId={3} />
    </>
  );
};

export default twitch;
