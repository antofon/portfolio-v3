import projectPageBodyStyles from '../../styles/ProjectPage/ProjectPageBody.module.css';
import { FaDotCircle } from 'react-icons/fa';
import Link from 'next/link';
import { ProjectPageProps } from '../../projectPageData';

const ProjectPageBody = ({ projects, projectId }: ProjectPageProps) => {
  const project = projects[projectId];
  return (
    <div className={projectPageBodyStyles.projectBody}>
      <div className={projectPageBodyStyles.projectBodyText}>
        <p className={projectPageBodyStyles.bodyProjectTitle}>Project</p>
        <h2 className={projectPageBodyStyles.bodyOverviewTitle}>Overview</h2>
        <p className={projectPageBodyStyles.projectDescription}>
          {project.projectDescription}
        </p>
        {/* <Link href="/#projects" className={projectPageBodyStyles.backButton}>
          Back
        </Link> */}
        <div className={projectPageBodyStyles.buttonContainer}>
          <a
            href="https://anwanantofon.com"
            className={projectPageBodyStyles.button}
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href=""
            className={`${projectPageBodyStyles.button} ${projectPageBodyStyles.marginLeft}`}
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
        <div></div>
      </div>
      <div className={projectPageBodyStyles.technologiesContainer}>
        <p className={projectPageBodyStyles.technologiesTitle}>Technologies</p>
        <div className={projectPageBodyStyles.technologiesStackContainer}>
          {project.projectPageStack.map((item, index) => (
            <p key={index}>
              <FaDotCircle className={projectPageBodyStyles.dotCircle} />
              <span className={projectPageBodyStyles.technology}>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPageBody;
