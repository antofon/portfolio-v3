import workPageBodyStyles from '../../styles/WorkPage/WorkPageBody.module.css';
import { WorkPageProps } from '../../data/workPageData';
import { FaDotCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ImageCarousel from '../ImageCarousel';

const WorkPageBody = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  const router = useRouter();
  return (
    <div className={workPageBodyStyles.projectBody}>
      <div className={workPageBodyStyles.projectBodyText}>
        {/* <p className={workPageBodyStyles.bodyProjectTitle}>Project</p> */}
        {/* <h2 className={workPageBodyStyles.bodyOverviewTitle}>Overview</h2> */}
        <h2 className={workPageBodyStyles.bodyOverviewTitle}>Gallery</h2>
        {/* <p className={workPageBodyStyles.projectDescription}>
          {workItem.workPageDescription}
        </p> */}
        <div className={workPageBodyStyles.carousel}>
          <ImageCarousel work={work} workId={workId} />
        </div>

        <div className={workPageBodyStyles.buttonContainer}>
          <a
            href={workItem.url}
            className={workPageBodyStyles.button}
            rel="noopener noreferrer"
            target="_blank"
          >
            Website
          </a>
        </div>
        {/* {router.asPath === '/experience' ? null : (
          <Link href="/#experience" className={workPageBodyStyles.backButton}>
            Back
          </Link>
        )} */}
        {/* <div className={workPageBodyStyles.buttonContainer}>
          <a
            href={project.projectDemoUrl}
            className={workPageBodyStyles.button}
            rel="noopener noreferrer"
            target="_blank"
          >
            Demo
          </a>
          <a
            href={project.projectCodeUrl}
            className={`${workPageBodyStyles.button} ${workPageBodyStyles.marginLeft}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Code
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default WorkPageBody;
