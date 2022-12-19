import Image from 'next/image';
import projectStyles from '../../styles/Projects/Project.module.css';
import { Projects } from '../../projectsData';

const Project = ({ projectsImage, projectsTitle, projectsStack }: Projects) => {
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
          <div className={projectStyles.middle}>
            <p className={projectStyles.title}>{projectsTitle}</p>
            <p className={projectStyles.stack}>{projectsStack}</p>
            <a href="#" className={projectStyles.link}>More Info</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
