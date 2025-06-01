import './styles/App.css'
import AppRouter from './AppRouter'
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MyFooter from './components/MyFooter/MyFooter';

function App() {
  return (
    <HashRouter >
      <Navbar />
      <AppRouter />
      <MyFooter />
    </HashRouter>
  );
}

export default App;
 