import React from 'react';
import { WorkPageProps } from '../../data/workPageData';
import WorkPageHeader from './WorkPageHeader';
import WorkPageBody from './WorkPageBody'

const ProjectPage = ({ work, workId }: WorkPageProps) => {
  return (
    <>
      <WorkPageHeader work={work} workId={workId} />
      <WorkPageBody work={work} workId={workId} />
    </>
  );
};

export default ProjectPage;
