import { useState } from 'react';
import './App.css';
import Card from './components/Card'
import PawLayout from './components/Layout'
import CardsLayout from './components/CardsLayout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wisdom from the Cat Realm</h2>
      </header>
      <section className='layout-area'>
        <PawLayout />
      </section>
      {/* <section className="cards-layout-area">
        <CardsLayout />
      </section> */}
    </div>
  );
}

export default App;
