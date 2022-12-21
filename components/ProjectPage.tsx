import React from 'react';
import { ProjectsProps } from '../projectsData';

const ProjectPage = ({ projects, projectNumber }: ProjectsProps) => {
  const portfolio = projects[projectNumber];
  return (
    <div>
      {/* <PortfolioHeader /> */}
      <div>
        <h2>{portfolio.projectsTitle}</h2>
        <h3>{portfolio.projectsStack}</h3>
      </div>
      <div>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          nulla? Nemo possimus corporis voluptatem quae earum minima saepe quod
          labore quisquam? Optio voluptas modi reiciendis nam sit sapiente culpa
          vitae!
        </p>
        {/* <div className={portfolioStyles.buttonContainer}> */}
        <div>
          <a href="">Demo</a>
          <a href="">Code</a>
        </div>
      </div>

      <div>
        <p>Technologies</p>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>

      <a href="#">Back</a>
      {/* <Link href={router.back}>Back</Link> */}
    </div>
  );
};

export default ProjectPage;
