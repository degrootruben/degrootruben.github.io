import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1
          style={{
            marginBottom: '0px'
          }}
        >DEVELOPER BASED IN AMSTERDAM</h1>

        <h2 style={{
            marginBottom: '0px'
          }}>Website coming soon...</h2>
        <h3><a href='mailto:info@rubendegroot.com'>info@rubendegroot.com</a></h3>
        <div>
        <a href='https://instagram.com/rubengroot_'>Instagram</a>&nbsp;&nbsp;
        <a href='https://www.linkedin.com/in/ruben-d-950385199/'>LinkedIn</a>
        </div>
      </header>
    </div>
  );
}

export default App;
