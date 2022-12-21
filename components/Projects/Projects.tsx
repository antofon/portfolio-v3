import projectsStyles from '../../styles/Projects/Projects.module.css';
import projectData from '../../projectsData';
import ProjectsList from './ProjectsList';

const Projects = () => {
  return (
    <div id="projects" className={projectsStyles.container}>
      <h2 className={projectsStyles.sectionTitle}>PROJECTS</h2>
      <p className={projectsStyles.sectionDescription}>What {"I've"} Built</p>
      <div className={projectsStyles.grid}>
        <ProjectsList projects={projectData} />
      </div>
    </div>
  );
};

export default Projects;
