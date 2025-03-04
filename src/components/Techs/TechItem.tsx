import { FC } from 'react'
import { TechItemProps } from '../../types/Techs'
import MyButton from '../UI/MyButton/MyButton'
import { setTechIdDataEv } from '../../generalstore/events'
import { setModalEv } from '../../generalstore/events'
const TechItem: FC<TechItemProps> = ({tech}) => {
    const getOwnId = () => {
        setTechIdDataEv(tech.id);
        setModalEv(true);
      }
  return (
    <div className='tech'>
        <div className='tech__content'>
        <img 
                src={tech.logo} 
                alt="Logo" 
                style={{ display: 'inline-block' }} 
            />
          <div className='tech__title'>{tech.title}</div>
          <div className='tech__body'>{tech.body}</div>
          <MyButton onClick={getOwnId}>Открыть</MyButton>
        </div>
    </div>
  )
}

export default TechItem
