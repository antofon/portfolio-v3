import ProjectItem from './ProjectItem';
import { ProjectsProps } from '../../../data/projectsData';
import experienceListStyles from '../../../styles/Experience/ExperienceList.module.css';

const ProjectsList = ({ projects }: ProjectsProps) => {
  return (
    <div className={experienceListStyles.container}>
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
