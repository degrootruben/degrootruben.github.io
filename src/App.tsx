import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welkom jochie!</h1>
        <Link to='/tiktok-automate'>TikTok</Link>
      </header>
    </div>
  );
}

export default App;
