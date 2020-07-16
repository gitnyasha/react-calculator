import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Display />
        <ButtonPanel />
      </header>
    </div>
  );
}

export default App;
