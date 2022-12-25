import { useState } from 'react';
import experienceStyles from '../../styles/Experience.module.css';
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
    <div id="experience" className={experienceStyles.container}>
      <h2 className={experienceStyles.sectionTitle}>EXPERIENCE</h2>
      <p className={experienceStyles.sectionDescription}>What {"I've"} Built</p>
      <div className={experienceStyles.links}>
        <a
          onClick={handleToggleExperience}
          className={experienceStyles.link}
        >
          Work
        </a>
        <a
          onClick={handleToggleExperience}
          className={experienceStyles.link}
        >
          Personal
        </a>
      </div>

      <div className={experienceStyles.grid}>
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
