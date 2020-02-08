import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from '../src/components/customer/customer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Customer/>
      </header>
    </div>
  );
}

export default App;
