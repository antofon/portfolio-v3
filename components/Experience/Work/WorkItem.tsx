import Image from 'next/image';
import Link from 'next/link';
import projectItemStyles from '../../../styles/Projects/ProjectItem.module.css';
import { Work } from '../../../data/workData';

const Project = ({
  workImage,
  workName,
  workTitle,
  workUrl,
}: Work) => {
  return (
    <div>
      <div className={projectItemStyles.card}>
        <div className={projectItemStyles.imageCol}>
          <Image
            src={workImage}
            alt={workName}
            width={500}
            height={500}
            className={projectItemStyles.img}
          ></Image>
          <div className={projectItemStyles.middle}>
            <p className={projectItemStyles.title}>{workName}</p>
            <p className={projectItemStyles.stack}>{workTitle}</p>
            <Link href={workUrl} className={projectItemStyles.link}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
