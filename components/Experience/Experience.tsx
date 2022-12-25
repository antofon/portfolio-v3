import { useState } from 'react';
import projectsStyles from '../../styles/Projects/Projects.module.css';
import projectData from '../../data/projectsData';
import ProjectsList from './Projects/ProjectsList';
import workData from '../../data/workData';
import WorkList from './Work/WorkList';

const Experience = () => {
  const [toggleExperience, setToggleExperience] = useState(true);

  const handleToggleExperience = () => {
    if (toggleExperience) {
      setToggleExperience(!toggleExperience);
    } else {
      setToggleExperience(!toggleExperience);
    }
  };

  return (
    <div id="experience" className={projectsStyles.container}>
      <h2 className={projectsStyles.sectionTitle}>EXPERIENCE</h2>
      <p className={projectsStyles.sectionDescription}>What {"I've"} Built</p>
      <div className={projectsStyles.experienceLinks}>
        <a
          onClick={handleToggleExperience}
          className={projectsStyles.experienceLink}
        >
          Work
        </a>
        <a
          onClick={handleToggleExperience}
          className={projectsStyles.experienceLink}
        >
          Personal
        </a>
      </div>

      <div className={projectsStyles.grid}>
        {toggleExperience ? (
          <WorkList work={workData} />
        ) : (
          <ProjectsList projects={projectData} />
        )}
      </div>
    </div>
  );
};

export default Experience;
