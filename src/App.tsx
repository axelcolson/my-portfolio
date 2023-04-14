import React from 'react';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header
        name="Axel Colson"
        title="Full-Stack Developer"
        email="axel_colson@hotmail.com"
        phone="+32 476 73 37 81"
        linkedIn="https://www.linkedin.com/in/axel-colson-a78814154/"
      />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
