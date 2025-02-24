import { FC } from 'react'
import { ProjectItemProps } from '../../types/Project'
const ProjectItem: FC<ProjectItemProps> = ({project}) => {
    
  return (
    <div className='project'>
        <div className='project__content'>
          <strong>{project.title}</strong>
          <div>{project.body}</div>
          <a href={project.link}>Ссылка на репозиторий</a>
        </div>
    </div>
  )
}

export default ProjectItem
