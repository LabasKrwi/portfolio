import React, { FC } from 'react'
import MyCard from '../components/MyCard/MyCard'
import Projects from './Projects'
import Techs from './Techs'
import MyMarquee from '../components/MyMarquee/MyMarquee';

const Main: FC = () => {
  return (
      <div className='main'>
        <MyCard />
        <MyMarquee />
        <Projects/>
        <Techs />
      </div>
        
  )
}

export default Main