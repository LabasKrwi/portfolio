import React, { FC } from 'react'
import MyCard from '../components/MyCard/MyCard'
import Projects from './Projects'
import Techs from './Techs'

const Main: FC = () => {
  return (
      <div className='main'>
        <MyCard />
        <Projects/>
        <Techs />
      </div>
        
  )
}

export default Main