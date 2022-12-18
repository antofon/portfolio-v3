import skillsStyles from '../../styles/Skills/Skills.module.css';
import SkillsList from './SkillsList';
import skillsData from '../../skillsData';

const Skills = () => {
  return (
    <div id="skills" className={skillsStyles.container}>
      <p className={skillsStyles.subtitle}>Skills</p>
      <h2 className={skillsStyles.title}>What I can Do</h2>
      <SkillsList skills={skillsData} />
    </div>
  );
};

export default Skills;