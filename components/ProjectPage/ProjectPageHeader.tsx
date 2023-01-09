import Image from 'next/image';
import { ProjectPageProps } from '../../data/projectPageData';
import projectPageHeaderStyles from '../../styles/ProjectPage/ProjectPageHeader.module.css';

const ProjectPageHeader = ({ projects, projectId }: ProjectPageProps) => {
  const project = projects[projectId];
  return (
    <div className={projectPageHeaderStyles.container}>
      <div className={projectPageHeaderStyles.bgContainer}>
        <div className={projectPageHeaderStyles.bgOverlay}></div>
        <Image
          src={project.projectPageHeaderImage}
          alt="project page header image"
          fill
          style={{ objectFit: 'cover', filter: 'blur(5px)' }}
        />
        <div className={projectPageHeaderStyles.headerText}>
          <h2>{project.projectPageTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageHeader;
