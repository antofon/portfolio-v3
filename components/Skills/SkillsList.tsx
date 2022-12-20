import Skill from './Skill';
import skillsListStyles from '../../styles/Skills/SkillsList.module.css';
import { SkillsProps } from '../../skillsData';

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
