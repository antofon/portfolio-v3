import projectPageData from '../data/projectPageData';
import ProjectPage from '../components/ProjectPage/ProjectPage';

const stemreads = () => {
  return (
    <>
      <ProjectPage projects={projectPageData} projectId={1} />
    </>
  );
};

export default stemreads;
