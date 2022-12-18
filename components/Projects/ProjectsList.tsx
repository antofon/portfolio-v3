import Project from './Project';
import projectsListStyles from '../../styles/Projects/ProjectsList.module.css';
import { ProjectsProps } from '../../projectsData';

const ProjectsList = ({ projects }: ProjectsProps) => {
  return (
    <div className={projectsListStyles.container}>
      {projects.map((project, index) => (
        <Project
          projectsImage={project.projectsImage}
          projectsTitle={project.projectsTitle}
          projectsStack={project.projectsStack}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
