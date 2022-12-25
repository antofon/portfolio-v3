import projectPageBodyStyles from '../../styles/ProjectPage/ProjectPageBody.module.css';
import { WorkPageProps } from '../../data/workPageData';
import { FaDotCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';

const WorkPageBody = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  const router = useRouter();
  return (
    <div className={projectPageBodyStyles.projectBody}>
      <div className={projectPageBodyStyles.projectBodyText}>
        <p className={projectPageBodyStyles.bodyProjectTitle}>Project</p>
        <h2 className={projectPageBodyStyles.bodyOverviewTitle}>Overview</h2>
        <p className={projectPageBodyStyles.projectDescription}>
          {workItem.workPageDescription}
        </p>
        {router.asPath === '/experience' ? null : (
          <Link href="/#experience" className={projectPageBodyStyles.backButton}>
            Back
          </Link>
        )}
        {/* <div className={projectPageBodyStyles.buttonContainer}>
          <a
            href={project.projectDemoUrl}
            className={projectPageBodyStyles.button}
            rel="noopener noreferrer"
            target="_blank"
          >
            Demo
          </a>
          <a
            href={project.projectCodeUrl}
            className={`${projectPageBodyStyles.button} ${projectPageBodyStyles.marginLeft}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Code
          </a>
        </div> */}
      </div>
      {/* <div className={projectPageBodyStyles.technologiesContainer}>
        <p className={projectPageBodyStyles.technologiesTitle}>Technologies</p>
        <div className={projectPageBodyStyles.technologiesStackContainer}>
          {workItem.projectPageStack.map((item, index) => (
            <p key={index}>
              <FaDotCircle className={projectPageBodyStyles.dotCircle} />
              <span className={projectPageBodyStyles.technology}>{item}</span>
            </p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default WorkPageBody;
