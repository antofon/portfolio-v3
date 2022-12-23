import React from 'react';
import { ProjectPageProps } from '../../data/projectPageData';
import ProjectPageHeader from './ProjectPageHeader';
import ProjectPageBody from './ProjectPageBody';

const ProjectPage = ({ projects, projectId }: ProjectPageProps) => {
  return (
    <>
      <ProjectPageHeader projects={projects} projectId={projectId} />
      <ProjectPageBody projects={projects} projectId={projectId} />
    </>
  );
};

export default ProjectPage;
