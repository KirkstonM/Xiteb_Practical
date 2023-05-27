import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './pages/Mainpage';
import { useSelector } from 'react-redux';
import { currentMode } from './features/modeSlice';

function App() {

  const mode = useSelector(currentMode);
  return (
    <div className='App' id={mode}>
      <Mainpage />
    </div>
  )
}

export default App