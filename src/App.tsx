import React from 'react';
import logo from './logo.svg';
import './styles/App.css'
import AppRouter from './AppRouter'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
 