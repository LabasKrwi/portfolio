import { FC } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../UI/MyButton/MyButton'
const Navbar:FC = () => {

  return (
    <div className='navbar'>
      <div className="navbar__links">
        <MyButton>
          <Link to="/main">Обо мне</Link>
        </MyButton>
        <MyButton>
          <Link to="/techs">Стек</Link>
        </MyButton>
        <MyButton>
          <Link to="/projects">Проекты</Link>
        </MyButton>
      </div>
    </div>
  )
}

export default Navbar