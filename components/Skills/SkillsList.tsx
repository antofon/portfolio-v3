import Skill from './Skill';
import { SkillsProps } from '../../data/skillsData';
import skillsListStyles from '../../styles/Skills/SkillsList.module.css';

const SkillsList = ({ skills }: SkillsProps) => {
  return (
    <div className={skillsListStyles.container}>
      {skills.map((skill, index) => {
        return (
          <Skill
            key={index}
            skillsIcon={skill.skillsIcon}
            skillsTitle={skill.skillsTitle}
          />
        );
      })}
    </div>
  );
};

export default SkillsList;
