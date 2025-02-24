import { FC } from 'react'
import cl from './MyButton.module.scss'
const MyButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({...props}) => {
  return (
    <button className={cl.myBtn} {...props}>
    </button>
  )
}

export default MyButton