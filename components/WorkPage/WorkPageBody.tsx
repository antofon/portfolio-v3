import Image from 'next/image';
import { WorkPageProps } from '../../data/workPageData';
import workPageBodyStyles from '../../styles/WorkPage/WorkPageBody.module.css';

const WorkPageBody = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  return (
    <div className={workPageBodyStyles.projectBody}>
      <div>
        <h2 className={workPageBodyStyles.bodyOverviewTitle}>Gallery</h2>
        <p className={workPageBodyStyles.projectDescription}>
          {workItem.workPageDescription}{' '}
          <a
            href={workItem.workPageUrl}
            rel="nofollow noreferrer"
            target="_blank"
            style={{ textDecoration: 'underline' }}
          >
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
      </div>
    </div>
  );
};

export default WorkPageBody;
