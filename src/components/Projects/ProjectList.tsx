import { FC } from 'react'
import { ProjectsListProps } from '../../types/Project'
import ProjectItem from './ProjectItem'
import MyModal from '../UI/MyModal/MyModal'
import {  setProjModalEv } from '../../generalstore/events'
import { useUnit } from 'effector-react'
import { $projModal } from '../../generalstore/store'
import ProjectById from './ProjectById'
import MyLoader from '../UI/MyLoader/MyLoader'

const ProjectList: FC<ProjectsListProps> = ({projects}) => {
  const modal = useUnit($projModal);
   const isProjModalOpen = modal['proj'];

  const closeProjModal = () => {
    setProjModalEv({ key: 'proj', visible: false });
    
  };

    if (!projects.length) {
        return (
            <MyLoader />
        )
    }
  return (
    <div className='pr__list'>
    <h1 
      style={{textAlign: 'center'}}
    >
      Список проектов
    </h1>
    {projects.map((project) =>
    <ProjectItem key={project.id}  project={project}/>
      )
    }
    <MyModal  setVisible={closeProjModal} visible={isProjModalOpen} children={<ProjectById/>}></MyModal>
  </div>
  )}



export default ProjectList