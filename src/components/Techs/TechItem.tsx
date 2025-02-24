import { FC } from 'react'
import { TechItemProps } from '../../types/Techs'
const TechItem: FC<TechItemProps> = ({tech}) => {
    
  return (
    <div className='project'>
        <div className='project__content'>
          <strong>{tech.title}</strong>
          <div>{tech.body}</div>
        </div>
    </div>
  )
}

export default TechItem
