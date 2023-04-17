import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Experience } from './components/Experience';

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
      <Experience 
        name="Axel Colson"
        title="Full-Stack Developer"
        email="axel_colson@hotmail.com"
        phone="+32 476 73 37 81"
        linkedIn="https://www.linkedin.com/in/axel-colson-a78814154/"/>
    </div>
  );
}

export default App;
