import { WorkPageProps } from '../../data/workPageData';
import WorkPageHeader from './WorkPageHeader';
import WorkPageBody from './WorkPageBody';

const WorkPage = ({ work, workId }: WorkPageProps) => {
  return (
    <>
      <WorkPageHeader work={work} workId={workId} />
      <WorkPageBody work={work} workId={workId} />
    </>
  );
};

export default WorkPage;
