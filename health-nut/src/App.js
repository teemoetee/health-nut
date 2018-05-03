import React, { Component } from 'react';
import './App.css';
import MacroCalc from './MacroCalc';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Health Nut</h1>
      <MacroCalc />
      </div>
    );
  }
}

export default App;
