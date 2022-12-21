import projectPageBodyStyles from '../../styles/ProjectPageBody.module.css';
import { FaDotCircle } from 'react-icons/fa';
import Link from 'next/link';
import { ProjectPageProps } from '../../projectPageData';

const ProjectPageBody = ({ projects, projectId }: ProjectPageProps) => {
  const project = projects[projectId];
  return (
    <div className={projectPageBodyStyles.projectBody}>
      <p className={projectPageBodyStyles.bodyProjectTitle}>Project</p>
      <h2 className={projectPageBodyStyles.bodyOverviewTitle}>Overview</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        nulla? Nemo possimus corporis voluptatem quae earum minima saepe quod
        labore quisquam? Optio voluptas modi reiciendis nam sit sapiente culpa
        vitae!
      </p>
      <div className={projectPageBodyStyles.technologiesContainer}>
        <p>Technologies</p>
        <div>
          {project.projectsStack.map((item, index) => (
            <p key={index}>
              <FaDotCircle className={projectPageBodyStyles.dotCircle} />
              <span className={projectPageBodyStyles.technology}>{item}</span>
            </p>
          ))}
        </div>
        <Link href="/#projects" className={projectPageBodyStyles.backButton}>
          Back
        </Link>
      </div>
    </div>

    //  <div className={projectPageBodyStyles.buttonContainer}>
    //   <a
    //     href="https://anwanantofon.com"
    //     className={projectPageBodyStyles.button}
    //     rel="noopener noreferrer"
    //   >
    //     Demo
    //   </a>
    //   <a
    //     href=""
    //     className={`${projectPageBodyStyles.button} ${projectPageBodyStyles.marginLeft}`}
    //     rel="noopener noreferrer"
    //   >
    //     Code
    //   </a>
    // </div>
    //  <div>
  );
};

export default ProjectPageBody;
