import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const wikipedia = () => {
  return (
    <>
      <ProjectPage projects={projectPageData} projectId={2} />
    </>
  );
};

export default wikipedia;
