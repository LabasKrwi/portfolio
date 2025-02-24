import React, { FC } from 'react'
import cl from './MyCard.module.scss'

const MyCard: FC = () => {
  return (
    <div className={cl.myCard}>
      <img src="https://sun9-66.userapi.com/impf/c844321/v844321788/ac0c9/gHezsXN5GK0.jpg?size=640x1136&quality=96&sign=dc607da459c00e5aba88919d4dca10a5&type=album" alt=''/>
        <ul>
          <li>Коперман Илья 25 лет</li>
          <li>занимаюсь frontend-разработкой 1 год</li>
          <li>диплом бакалавра инженер-технолог</li>
        </ul>
    </div>
  )
}

export default MyCard