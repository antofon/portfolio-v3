import WorkItem from './WorkItem';
import experienceListStyles from '../../../styles/Experience/ExperienceList.module.css';
import { WorkProps } from '../../../data/workData';

const WorkList = ({ work }: WorkProps) => {
  return (
    <div className={experienceListStyles.container}>
      {work.map((workItem, index) => (
        <WorkItem
          workImage={workItem.workImage}
          workName={workItem.workName}
          workTitle={workItem.workTitle}
          workUrl={workItem.workUrl}
          key={index}
        />
      ))}
    </div>
  );
};

export default WorkList;
