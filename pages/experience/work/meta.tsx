import workPageData from '../../../data/workPageData';
import WorkPage from '../../../components/WorkPage/WorkPage';

const meta = () => {
  return (
    <>
      <WorkPage work={workPageData} workId={1} />
    </>
  );
};

export default meta;
