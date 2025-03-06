import './styles/App.css'
import AppRouter from './AppRouter'
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MyFooter from './components/MyFooter/MyFooter';
import { useUnit } from 'effector-react';
import { $menu } from './generalstore/store';
function App() {
  const menu = useUnit($menu);
  return (
    <HashRouter >
      <Navbar />
      <AppRouter />
      <MyFooter visible={menu}/>
    </HashRouter>
  );
}

export default App;
 