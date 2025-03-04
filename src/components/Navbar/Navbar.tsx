import { FC } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../UI/MyButton/MyButton'
const Navbar:FC = () => {

  return (
    <header>
      <div className='navbar'>
        <div className="navbar__links">
          <div className="navbar__link">
            <MyButton>
              <Link to="/main">Главная</Link>
            </MyButton>
          </div>
          <div className='navbar__link'>
            <MyButton>
              <Link to="/techs">Стек</Link>
            </MyButton>
          </div>
            <div className="navbar__link">
              <MyButton>
                <Link to="/projects">Проекты</Link>
              </MyButton>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Navbar