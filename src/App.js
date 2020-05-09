import React from 'react';
import './App.css';
import MainMenu from './Components/Menu/MainMenu';
import TodayTop from './Components/Calendar/TodayTop';
import TodayMiddle from './Components/Calendar/TodayMiddle';
import TodayBottom from './Components/Calendar/TodayBottom';

function App() {
  return (
    <div className='layout'>
      <section className='menuWrapper'>
        <MainMenu/>
      </section>
      <section className='todayWrapper'>
        <TodayTop/>
        <TodayMiddle/>
        <TodayBottom/>
      </section>
    </div>
  );
}

export default App;
