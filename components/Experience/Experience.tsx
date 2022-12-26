import { useState, useEffect } from 'react';
import Link from "next/link"
import experienceStyles from '../../styles/Experience.module.css';
import projectData from '../../data/projectsData';
import ProjectsList from './Projects/ProjectsList';
import workData from '../../data/workData';
import WorkList from './Work/WorkList';

const Experience = () => {
  const [toggleExperience, setToggleExperience] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [activeClass, setActiveClass] = useState('3px solid #38b6ff');

  useEffect(() => {}, []);
  const handleToggleExperience = (e:any) => {
    e.preventDefault();

    console.log("toggle link")
    if (toggleExperience) {
      //show work experience
      setToggleExperience(!toggleExperience);
      setIsActive(true);
    } else {
      //show personal experience
      setToggleExperience(!toggleExperience);
      setIsActive(false);
    }
  };

  return (
    <div id="experience" className={experienceStyles.container}>
      <h2 className={experienceStyles.sectionTitle}>EXPERIENCE</h2>
      <p className={experienceStyles.sectionDescription}>What {"I've"} Built</p>
      <div className={experienceStyles.links}>
        <Link
          onClick={handleToggleExperience}
          className={experienceStyles.link}
          style={
            isActive
              ? { borderBottom: `${activeClass}` }
              : { borderBottom: 'none' }
          }
        href="/experience/work">
          Work
        </Link>
        <Link
          onClick={handleToggleExperience}
          className={experienceStyles.link}
          style={
            isActive
              ? { borderBottom: 'none' }
              : { borderBottom: `${activeClass}` }
          }
        href="/experience/personal">
          Personal
        </Link>
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
