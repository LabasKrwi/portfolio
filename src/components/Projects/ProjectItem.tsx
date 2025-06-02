import { FC } from 'react'
import { ProjectItemProps } from '../../types/Project';
import { setProjModalEv, setProjIdDataEv } from '../../generalstore/events';
import MyButton from '../UI/MyButton/MyButton';

const ProjectItem: FC<ProjectItemProps> = ({project}) => {
  const getOwnId = () => {
    setProjIdDataEv(project.id);
    setProjModalEv({ key: 'proj', visible: true });
  }
  return (
    <div className='project'>
        <div className='project__content'>
          <strong>{project.title}</strong>
          <div>{project.body}</div>
          <a href={project.link}>Ссылка на репозиторий</a>
          <MyButton onClick={getOwnId}>Открыть</MyButton>
        </div>
    </div>
  )
}

export default ProjectItem
