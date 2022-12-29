import { useState } from 'react';
import experienceStyles from '../../styles/Experience/Experience.module.css';
import projectData from '../../data/projectsData';
import ProjectsList from './Projects/ProjectsList';
import workData from '../../data/workData';
import WorkList from './Work/WorkList';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(true);

  const handleActiveExperience = (e: any) => {
    e.preventDefault();

    const et = e.target;

    const active = document.querySelector(`.${experienceStyles.active}`);
    // since 'Work' is active by default, check for "Personal text" to meet conditions to toggle necessary state and classes
    if (active && et.text === 'Personal') {
      active.classList.remove(`${experienceStyles.active}`);
      et.classList.add(`${experienceStyles.active}`);
      setActiveExperience(false);
    } else {
      active?.classList.remove(`${experienceStyles.active}`);
      et.classList.add(`${experienceStyles.active}`);
      setActiveExperience(true);
    }
  };

  return (
    <div id="experience" className={experienceStyles.container}>
      <h2 className={experienceStyles.sectionTitle}>EXPERIENCE</h2>
      {activeExperience ? (
        <p className={experienceStyles.sectionDescription}>
          Where {"I've"} Worked
        </p>
      ) : (
        <p className={experienceStyles.sectionDescription}>
          What {"I've"} Built
        </p>
      )}
      <div className={experienceStyles.links}>
        <a
          onClick={handleActiveExperience}
          className={`${experienceStyles.link} ${experienceStyles.active}`}
        >
          Work
        </a>
        <a onClick={handleActiveExperience} className={experienceStyles.link}>
          Personal
        </a>
      </div>

      <div className={experienceStyles.grid}>
        {activeExperience ? (
          <WorkList work={workData} />
        ) : (
          <ProjectsList projects={projectData} />
        )}
      </div>
    </div>
  );
};

export default Experience;
