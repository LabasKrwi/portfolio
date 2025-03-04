import { FC } from 'react'
import MyButton from '../UI/MyButton/MyButton'
import cl from './MyFooter.module.scss'
import { setMenuEv } from '../../generalstore/events'
interface MyMenuProps {
  visible: boolean;
}
const MyFooter:FC<MyMenuProps> = ({...props}) => {

  const rootClasses = [cl.myMenu];
  
  
    if (props.visible) {
      rootClasses.push(cl.active)
    }
  

  return (
    <footer>
      <div className={cl.menuBtn}>
        <MyButton onClick={() => setMenuEv(true)}>
            Контакты
        </MyButton>
      
      <div className={rootClasses.join(' ')} onClick={(e) => e.stopPropagation()}>
        <ul style={{margin: '15px'}}>
          <li>г. Москва, м. Новые Черемушки</li>
          <li>ilukhan791@mail.ru</li>
          <li>+7 (916) 670-27-59</li>
          <li><a href="https://hh.ru/resume/8aac7c42ff0e6d7ebb0039ed1f714d6531614c?print=true">PDF Резюме для HR-отдела</a></li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default MyFooter