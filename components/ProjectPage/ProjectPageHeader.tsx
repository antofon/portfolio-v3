import React from 'react'
import { ProjectPageProps } from '../../projectPageData';
import projectPageHeaderStyles from "../../styles/ProjectPage/ProjectPageHeader.module.css"

const ProjectPageHeader = ({ projects, projectId }: ProjectPageProps) => {
  return (
    <div className={projectPageHeaderStyles.container}><p>Project page header</p></div>
  )
}

export default ProjectPageHeader