import React, { FC } from 'react'
import cl from './MyCard.module.scss'

const MyCard: FC = () => {
  return (
    <div className={cl.myCard}>
      <img src="https://sun9-54.userapi.com/impg/72BDi1WYudC45MiWQpSn2KyJfNDcXtzNTa0bjA/qumyN7ztus8.jpg?size=960x1280&quality=95&sign=e52aa3c94bbbec21ed16a522ea075599&type=album" alt=''/>
        <ul>
          <li>Коперман Илья, 25 лет</li>
          <li>Занимаюсь frontend-разработкой с декабря 2023</li>
          <li>Диплом о высшем образовании бакалавра инженера-технолога</li>
        </ul>
    </div>
  )
}

export default MyCard