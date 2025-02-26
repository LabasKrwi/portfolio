import React, { FC } from 'react'
import { ProjectsListProps } from '../../types/Project'
import ProjectItem from './ProjectItem'
import MyModal from '../UI/MyModal/MyModal'
import { setModalEv } from '../../generalstore/events'
import { useUnit } from 'effector-react'
import { $modal } from '../../generalstore/store'
import ProjectById from './ProjectById'
const ProjectList: FC<ProjectsListProps> = ({projects}) => {
  const modal = useUnit($modal);
  
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
    <MyModal setVisible={setModalEv} visible={modal} children={<ProjectById/>}></MyModal>
  </div>
  )}



export default ProjectList