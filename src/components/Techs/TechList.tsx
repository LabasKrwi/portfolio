import { FC } from 'react'
import { TechsListProps } from '../../types/Techs'
import TechItem from './TechItem'
import MyModal from '../UI/MyModal/MyModal'
import {  setTechModalEv } from '../../generalstore/events'
import { $techModal } from '../../generalstore/store'
import { useUnit } from 'effector-react'
import TechById from './TechItemById'



const TechsList: FC<TechsListProps> = ({techs}) => {
  const modal = useUnit($techModal);
  const isTechModalOpen = modal['tech'];

  const closeTechModal = () => {
    setTechModalEv({ key: 'tech', visible: false });
  };

    if (!techs.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Технологии пока не указаны</h1>
        )
    }
  return (
    <div className='tech__list'>
    <h1 
      style={{textAlign: 'center'}}
    >
      Перечень технологий
    </h1>
    {techs.map((tech) =>
    <TechItem key={tech.id}  tech={tech}/>
      )
    }
    <MyModal setVisible={closeTechModal} visible={isTechModalOpen} children={<TechById/>}></MyModal>
  </div>
  )}
  


export default TechsList