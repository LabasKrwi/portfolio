import React, { FC } from 'react'
import { ProjectsListProps } from '../../types/Project'
import ProjectItem from './ProjectItem'

const ProjectList: FC<ProjectsListProps> = ({projects}) => {
    if (!projects.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Проекты пока не написаны</h1>
        )
    }
  return (
    <div>
    <h1 
      style={{textAlign: 'center'}}
    >
      Список проектов
    </h1>
    {projects.map((project) =>
    <ProjectItem key={project.id}  project={project}/>
      )
    }
  </div>
  )}



export default ProjectList