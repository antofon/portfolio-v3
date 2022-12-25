import projectPageData from '../../../data/projectPageData';
import ProjectPage from '../../../components/ProjectPage/ProjectPage';

const portfolio = () => {
  return (
    <>
      <ProjectPage projects={projectPageData} projectId={0} />
    </>
  );
};

export default portfolio;
