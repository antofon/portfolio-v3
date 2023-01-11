import SkillsList from './SkillsList';
import skillsData from '../../data/skillsData';
import skillsStyles from '../../styles/Skills/Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={skillsStyles.container} aria-labelledby="skills">
      <h2 className={skillsStyles.sectionTitle}>Skills</h2>
      <h3 className={skillsStyles.sectionDescription}>What I Can Do</h3>
      <SkillsList skills={skillsData} />
    </section>
  );
};

export default Skills;
