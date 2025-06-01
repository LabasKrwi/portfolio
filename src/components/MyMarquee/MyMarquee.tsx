import { FC } from 'react'
import cl from './MyMarquee.module.scss'

const MyMarquee: FC = () => {
  return (
    <div className={cl.bmarquee}>
     
      <div className={cl.bmarqueeInner}>
        
        
        <div className={cl.bmarqueeContent}><span>Frontend </span><span>Frontend</span><span>Frontend</span></div>
        <div className={cl.bmarqueeContent}><span>Frontend </span><span>Frontend</span><span>Frontend</span></div>
      </div>
    </div>
  )
}

export default MyMarquee