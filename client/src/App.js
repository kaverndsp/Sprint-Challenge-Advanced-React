import React from 'react';
import Players from "./components/Players";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar data-testid="nav"/>
      <Players data-testid="player"/>
    </div>
  );
}

export default App;
