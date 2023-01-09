import Image from 'next/image';
import { WorkPageProps } from '../../data/workPageData';
import workPageHeaderStyles from '../../styles/WorkPage/WorkPageHeader.module.css';

const WorkPageHeader = ({ work, workId }: WorkPageProps) => {
  const workItem = work[workId];
  return (
    <div className={workPageHeaderStyles.container}>
      <div className={workPageHeaderStyles.bgContainer}>
        <div className={workPageHeaderStyles.bgOverlay}></div>
        <Image
          src={workItem.workPageHeaderImage}
          alt="work page header image"
          fill
          style={{ objectFit: 'cover', filter: 'blur(5px)' }}
        />
        <div
          className={
            workId === 1
              ? `${workPageHeaderStyles.headerMetaText}`
              : `${workPageHeaderStyles.headerText}`
          }
        >
          <h2 className={workPageHeaderStyles.titleText}>
            {workItem.workPageTitle}
          </h2>
          <p
            className={workPageHeaderStyles.positionText}
            style={{ color: 'white' }}
          >
            {workItem.workPagePosition}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkPageHeader;
