import Image from 'next/image';
import projectStyles from '../../styles/Projects/Project.module.css';
import { Projects } from '../../projectsData';

const Project = ({ projectsImage, projectsTitle }: Projects) => {
  return (
    <div>
      <div className={projectStyles.card}>
        <div className={projectStyles.imageCol}>
          <Image
            src={projectsImage}
            alt={projectsTitle}
            width={500}
            height={500}
            className={projectStyles.img}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Project;
