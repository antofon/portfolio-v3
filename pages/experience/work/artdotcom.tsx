import workPageData from '../../../data/workPageData';
import WorkPage from '../../../components/WorkPage/WorkPage';

const artdotcom = () => {
  return (
    <>
      <WorkPage work={workPageData} workId={2} />
    </>
  );
};

export default artdotcom;
