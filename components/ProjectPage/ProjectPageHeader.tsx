import React from 'react';
import Image from 'next/image';
import { ProjectPageProps } from '../../projectPageData';
import projectPageHeaderStyles from '../../styles/ProjectPage/ProjectPageHeader.module.css';
import projectImg from '../../public/assets/images/about/joshua-woroniecki-lzh3hPtJz9c-unsplash.jpeg';

const ProjectPageHeader = ({ projects, projectId }: ProjectPageProps) => {
  const project = projects[projectId];
  return (
    <div className={projectPageHeaderStyles.container}>
      <div className={projectPageHeaderStyles.bgContainer}>
        <div className={projectPageHeaderStyles.bgOverlay}></div>
        <Image
          src={projectImg}
          alt="alt text"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={projectPageHeaderStyles.headerText}>
          <h2>{project.projectPageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageHeader;
