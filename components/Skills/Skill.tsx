import skillStyles from '../../styles/Skills/Skill.module.css';
import Image from 'next/image';
import { Skills } from '../../data/skillsData';

const Skill = ({ skillsIcon, skillsTitle }: Skills) => {
  return (
    <div className={skillStyles.card}>
      <div>
        <Image
          src={skillsIcon}
          alt={skillsTitle}
          width={75}
          height={75}
        ></Image>
      </div>
      <div>
        <p className={skillStyles.skillName}>{skillsTitle}</p>
      </div>
    </div>
  );
};

export default Skill;
