import  { FC } from 'react'
import cl from './MyCard.module.scss'

const MyCard: FC = () => {

  


  return (
    <div className={cl.myCard}>
      <label className='about'>Обо мне</label>
      <img src="https://sun9-54.userapi.com/impg/72BDi1WYudC45MiWQpSn2KyJfNDcXtzNTa0bjA/qumyN7ztus8.jpg?size=960x1280&quality=95&sign=e52aa3c94bbbec21ed16a522ea075599&type=album" alt=''/>
      <div>
        <img className='logo'src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="" />
        <img className='logo' src="https://avatars.mds.yandex.net/i?id=69cffdf42421715b6798a650d7a3c8374ad7ea72c622697b-12173886-images-thumbs&n=13" alt="" />
        <img className='logo' src="https://avatars.mds.yandex.net/i?id=9914ff3fb1c5614ad742f0e940ac7c7e08aa46a5-9846104-images-thumbs&n=13" alt="" />
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTF2xa9JVGbriK36XzYCmUfKyDrapQFe3jw&s" alt="" />
        <img className='logo' src="https://totaku.ru/yarn-ili-npm-vsie-chto-vam-nuzhno-znat-o-nikh/featured-image.png" alt="" />
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s" alt="" />
        <img className='logo' src="https://logowik.com/content/uploads/images/t_visual-studio-code4470.jpg" alt="" />
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0IutJqde9XvdyPMwOKgFb85WFyzFpE6M70A&s" alt="" />
      </div>
        <ul>
          <li>Коперман Илья, 25 лет</li>
          <li>Занимаюсь frontend-разработкой с декабря 2023</li>
          <li>Диплом о высшем образовании бакалавра инженера-технолога</li>
        </ul>
    </div>
  )
}

export default MyCard