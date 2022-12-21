import React from 'react';
import router from 'next/router';
import Link from 'next/link';
import projectData from '../projectsData';
// import portfolioStyles from '../styles/Portfolio.modules.css';
// import PortfolioHeader from '../components/PortfolioHeader';
// import PortfolioBody from '../components/PortfolioBody';
import ProjectPage from '../components/ProjectPage';

const portfolio = () => {
  return (
    <>
      <ProjectPage projects={projectData} projectNumber={0} />
    </>
  );
};

export default portfolio;
