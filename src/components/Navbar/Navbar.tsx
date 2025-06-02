import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import MyButton from '../UI/MyButton/MyButton'
const Navbar:FC = () => {
  

  return (
    <header>
      <div className='navbar'>
        <div className='navbar__logo'><span className="logoF">Frontend</span>-developer <img className='navbar__logoImg' style={{maxWidth:'40px'}} src='https://camo.githubusercontent.com/105a7adc1776120619bc3e138ccad94ac718c50b76391dec8f87c1b41bc36937/68747470733a2f2f7777772e7076736d2e72752f696d616765732f323031382f31312f30362f6b616b2d72617a7665726e75742d6f6b72756a656e69652d646c79612d72617a7261626f746b692d7072696c6f6a656e69692d6e612d52656163742d4e61746976652e706e67' alt='#'></img></div>
        <div className="navbar__links">
          <div className="navbar__link">
            <MyButton className='navbar__btn'>
              <NavLink to="/main" style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                  color: isActive ? 'Black' : 'inherit'
                })}>Главная</NavLink>
            </MyButton>
          </div>
          <div className='navbar__link'>
            <MyButton className='navbar__btn'>
              <NavLink to="/techs" style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
                  color: isActive ? 'Black' : 'inherit'
                })}>Стек</NavLink>
            </MyButton>
          </div>
            <div className="navbar__link">
              <MyButton className='navbar__btn'>
                <NavLink to="/projects" style={({ isActive }) => ({
                  textDecoration: isActive ? 'underline' : 'none',
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