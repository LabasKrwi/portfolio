import { FC } from 'react'
import cl from './MyFooter.module.scss'
import hhru from '../../images/hhru.png'
import github from '../../images/Github.png'
import telegram from'../../images/telegram.png'
const MyFooter:FC = () => {  
  
  return ( 
    <footer id='footer'>

          <div className={cl.myMenu}>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1N_NGSKwAphuaZyRUJokyLSkqGxLtmFU5/view?usp=sharing"><img src={hhru} alt=""/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/LabasKrwi"><img src={github} alt=""/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://t.me/labaskrwi"><img src={telegram} alt=""/></a>
            </div>
            <div>Copyright @Ilya Koperman</div>
          </div>
    </footer>
  )
}

export default MyFooter