import WorkItem from './WorkItem';
import projectsListStyles from '../../../styles/Projects/ProjectsList.module.css';
import { WorkProps } from '../../../data/workData';

const ProjectsList = ({ work }: WorkProps) => {
  return (
    <div className={projectsListStyles.container}>
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

export default ProjectsList;
