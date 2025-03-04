import React, { FC } from 'react'
import { TechsListProps } from '../../types/Techs'
import TechItem from './TechItem'
import MyModal from '../UI/MyModal/MyModal'
import { setModalEv } from '../../generalstore/events'
import { $modal } from '../../generalstore/store'
import { useUnit } from 'effector-react'
import TechById from './TechItemById'
const TechsList: FC<TechsListProps> = ({techs}) => {
  const modal = useUnit($modal);
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
    <MyModal setVisible={setModalEv} visible={modal} children={<TechById/>}></MyModal>
  </div>
  )}
  


export default TechsList