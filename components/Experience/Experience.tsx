import { useState } from 'react';
import WorkList from './Work/WorkList';
import ProjectsList from './Projects/ProjectsList';
import workData from '../../data/workData';
import projectData from '../../data/projectsData';
import experienceStyles from '../../styles/Experience/Experience.module.css';

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
    <section id="experience" className={experienceStyles.container} aria-labelledby="experience">
      <h2 className={experienceStyles.sectionTitle}>EXPERIENCE</h2>
      {activeExperience ? (
        <h3 className={experienceStyles.sectionDescription}>
          Where {"I've"} Worked
        </h3>
      ) : (
        <h3 className={experienceStyles.sectionDescription}>
          What {"I've"} Built
        </h3>
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
      <div className={experienceStyles.experienceContainer}>
        {activeExperience ? (
          <WorkList work={workData} />
        ) : (
          <ProjectsList projects={projectData} />
        )}
      </div>
    </section>
  );
};

export default Experience;
