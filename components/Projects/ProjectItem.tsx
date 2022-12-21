import Image from 'next/image';
import Link from 'next/link';
import projectItemStyles from '../../styles/Projects/ProjectItem.module.css';
import { Projects } from '../../projectsData';

const Project = ({
  projectsImage,
  projectsTitle,
  projectsStack,
  projectsUrl
}: Projects) => {
  return (
    <div>
      <div className={projectItemStyles.card}>
        <div className={projectItemStyles.imageCol}>
          <Image
            src={projectsImage}
            alt={projectsTitle}
            width={500}
            height={500}
            className={projectItemStyles.img}
          ></Image>
          <div className={projectItemStyles.middle}>
            <p className={projectItemStyles.title}>{projectsTitle}</p>
            <p className={projectItemStyles.stack}>{projectsStack}</p>
            <Link href={projectsUrl} className={projectItemStyles.link}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
