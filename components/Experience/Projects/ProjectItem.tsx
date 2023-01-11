import Image from 'next/image';
import Link from 'next/link';
import { Projects } from '../../../data/projectsData';
import experienceItemStyles from '../../../styles/Experience/ExperienceItem.module.css';

const Project = ({
  projectsImage,
  projectsTitle,
  projectsStack,
  projectsUrl,
}: Projects) => {
  return (
    <>
      <div className={experienceItemStyles.imageCol}>
        <Image
          src={projectsImage}
          alt=""
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
    </>
  );
};

export default Project;
