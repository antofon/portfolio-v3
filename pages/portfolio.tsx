import React from 'react';
import projectPageData from '../projectPageData';
// import portfolioStyles from '../styles/Portfolio.modules.css';
import ProjectPage from '../components/ProjectPage/ProjectPage';

const portfolio = () => {
  return (
    <>
      <ProjectPage projects={projectPageData} projectId={0} />
    </>
  );
};

export default portfolio;
