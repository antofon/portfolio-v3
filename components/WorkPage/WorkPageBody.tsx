import workPageBodyStyles from '../../styles/WorkPage/WorkPageBody.module.css';
import { WorkPageProps } from '../../data/workPageData';
import { FaDotCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ImageCarousel from '../ImageCarousel';
import Image from 'next/image';

const WorkPageBody = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  const router = useRouter();
  return (
    <div className={workPageBodyStyles.projectBody}>
      <div className={workPageBodyStyles.projectBodyText}>
        {/* <p className={workPageBodyStyles.bodyProjectTitle}>Project</p> */}
        {/* <h2 className={workPageBodyStyles.bodyOverviewTitle}>Overview</h2> */}
        <h2 className={workPageBodyStyles.bodyOverviewTitle}>Gallery</h2>
        <p className={workPageBodyStyles.projectDescription}>
          {workItem.workPageDescription} <a
          href={workItem.url}
          rel="nofollow noreferrer"
          target="_blank"
         style={{textDecoration:"underline"}}>
          Website
        </a>
        </p>
        

        <div className={workPageBodyStyles.imageContainer}>
          {workItem.workPageGallery.map((item, index) => (
            <Image
              src={item.image}
              key={index}
              alt={item.caption}
              width={300}
              height={300}
              className={workPageBodyStyles.workImage}
            />
          ))}
        </div>

        {/* <div workPageBodyStyles></div> */}
        {/* <div className={workPageBodyStyles.carousel}>
          <ImageCarousel work={work} workId={workId} />
        </div> */}

        {/* <div className={workPageBodyStyles.buttonContainer}>
          <a
            href={workItem.url}
            className={workPageBodyStyles.button}
            rel="noopener noreferrer"
            target="_blank"
          >
            Website
          </a>
        </div> */}
        {/* {router.asPath === '/experience' ? null : (
          <Link href="/#experience" className={workPageBodyStyles.backButton}>
            Back
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default WorkPageBody;
