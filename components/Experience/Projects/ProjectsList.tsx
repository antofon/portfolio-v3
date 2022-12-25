import ProjectItem from './ProjectItem';
import projectsListStyles from '../../../styles/Projects/ProjectsList.module.css';
import { ProjectsProps } from '../../../data/projectsData';

const ProjectsList = ({ projects }: ProjectsProps) => {
  return (
    <div className={projectsListStyles.container}>
      {projects.map((project, index) => (
        <ProjectItem
          projectsImage={project.projectsImage}
          projectsTitle={project.projectsTitle}
          projectsStack={project.projectsStack}
          projectsUrl={project.projectsUrl}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
