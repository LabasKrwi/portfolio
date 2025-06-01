import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import MyButton from '../UI/MyButton/MyButton'
const Navbar:FC = () => {
  

  return (
    <header>
      <div className='navbar'>
        <div className="navbar__links">
          <div className="navbar__link">
            <MyButton className='navbar__btn'>
              <NavLink to="/main" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'Black' : 'inherit'
                })}>Главная</NavLink>
            </MyButton>
          </div>
          <div className='navbar__link'>
            <MyButton className='navbar__btn'>
              <NavLink to="/techs" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'Black' : 'inherit'
                })}>Стек</NavLink>
            </MyButton>
          </div>
            <div className="navbar__link">
              <MyButton className='navbar__btn'>
                <NavLink to="/projects" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'Black' : 'inherit'
                })}>Проекты</NavLink>
              </MyButton>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Navbar