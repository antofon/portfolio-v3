import skillsStyles from '../../styles/Skills/Skills.module.css';
import SkillsList from './SkillsList';
import skillsData from '../../data/skillsData';

const Skills = () => {
  return (
    <div id="skills" className={skillsStyles.container}>
      <p className={skillsStyles.sectionTitle}>Skills</p>
      <h2 className={skillsStyles.sectionDescription}>What I Can Do</h2>
      <SkillsList skills={skillsData} />
    </div>
  );
};

export default Skills;
