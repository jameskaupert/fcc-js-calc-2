import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>FCC Javascript Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
