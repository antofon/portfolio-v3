import Image from 'next/image';
import Link from 'next/link';
import experienceItemStyles from '../../../styles/Experience/ExperienceItem.module.css';
import { Projects } from '../../../data/projectsData';

const Project = ({
  projectsImage,
  projectsTitle,
  projectsStack,
  projectsUrl,
}: Projects) => {
  return (
    <div>
      <div className={experienceItemStyles.card}>
        <div className={experienceItemStyles.imageCol}>
          <Image
            src={projectsImage}
            alt={projectsTitle}
            width={500}
            height={500}
            className={experienceItemStyles.img}
          ></Image>
          <div className={experienceItemStyles.middle}>
            <p className={experienceItemStyles.title}>{projectsTitle}</p>
            <p className={experienceItemStyles.stack}>{projectsStack}</p>
            <Link href={projectsUrl} className={experienceItemStyles.link}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
