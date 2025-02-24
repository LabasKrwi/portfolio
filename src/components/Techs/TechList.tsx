import React, { FC } from 'react'
import { TechsListProps } from '../../types/Techs'
import TechItem from './TechItem'
const TechsList: FC<TechsListProps> = ({techs}) => {
    if (!techs.length) {
        return (
            <h1 style={{textAlign: 'center'}}>Технологии пока не указаны</h1>
        )
    }
  return (
    <div>
    <h1 
      style={{textAlign: 'center'}}
    >
      Перечень технологий
    </h1>
    {techs.map((tech) =>
    <TechItem key={tech.id}  tech={tech}/>
      )
    }
  </div>
  )}
  


export default TechsList