import React, { FC } from 'react'
import cl from'./MyMarquee.module.scss'

const MyMarquee:FC = () => {
  return (
        <div className={cl.bmarquee}>
          <div className={cl.bmarqueeText}>Frontend</div>
          <br />
          <div className={cl.bmarqueeTextRev}>Коперман Илья</div>
        </div>
  )
}

export default MyMarquee