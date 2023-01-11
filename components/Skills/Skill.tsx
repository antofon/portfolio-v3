import Image from 'next/image';
import { Skills } from '../../data/skillsData';
import skillStyles from '../../styles/Skills/Skill.module.css';

const Skill = ({ skillsIcon, skillsTitle }: Skills) => {
  return (
    <div className={skillStyles.card}>
      <Image
        src={skillsIcon}
        alt={`Skill: ${skillsTitle}`}
        width={75}
        height={75}
      ></Image>
      <h4 className={skillStyles.skillName}>{skillsTitle}</h4>
    </div>
  );
};

export default Skill;
