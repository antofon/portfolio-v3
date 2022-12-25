import React from 'react';
import Image from 'next/image';
import { WorkPageProps } from '../../data/workPageData';
import projectPageHeaderStyles from '../../styles/ProjectPage/ProjectPageHeader.module.css';
import workImg from '../../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';

const ProjectPageHeader = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  return (
    <div className={projectPageHeaderStyles.container}>
      <div className={projectPageHeaderStyles.bgContainer}>
        <div className={projectPageHeaderStyles.bgOverlay}></div>
        <Image
          src={workImg}
          alt="alt text"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={projectPageHeaderStyles.headerText}>
          <h2>{workItem.workPageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageHeader;
