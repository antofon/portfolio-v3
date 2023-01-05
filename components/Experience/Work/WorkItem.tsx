import Image from 'next/image';
import Link from 'next/link';
import { Work } from '../../../data/workData';
import experienceItemStyles from '../../../styles/Experience/ExperienceItem.module.css';

const WorkItem = ({ workImage, workName, workTitle, workUrl }: Work) => {
  return (
    <>
      <div className={experienceItemStyles.imageCol}>
        <Image
          src={workImage}
          alt={workName}
          width={500}
          height={500}
          className={experienceItemStyles.img}
        ></Image>
        <div className={experienceItemStyles.middle}>
          <p className={experienceItemStyles.title}>{workName}</p>
          <p className={experienceItemStyles.stack}>{workTitle}</p>
          <Link href={workUrl} className={experienceItemStyles.link}>
            More Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default WorkItem;
