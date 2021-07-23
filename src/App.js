import { useState } from 'react';
import './App.css';
import Card from './components/Card'
import PawLayout from './components/Layout'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Wisdom from the Cat Realm</h2>
      </header>
      <section className='layout-area'>
        <div>Cards will be here </div>
        <PawLayout />
      </section>
    </div>
  );
}

export default App;
