import ProjectItem from './ProjectItem';
import experienceListStyles from '../../../styles/Experience/ExperienceList.module.css';
import { ProjectsProps } from '../../../data/projectsData';

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
