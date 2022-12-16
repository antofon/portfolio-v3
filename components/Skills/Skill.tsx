import React from 'react';
import skillStyles from '../../styles/Skills/Skill.module.css';
import Image from 'next/image';
import { Skills } from '../../skillsData';

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
      <div className={skillStyles.text}>
        <p>{skillsTitle}</p>
      </div>
    </div>
  );
};

export default Skill;
