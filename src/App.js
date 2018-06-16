import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { ExchangeRates } from './tutorial/ExchangeRates';
import { DogSelect } from './tutorial/DogSelect';
import { DogPhoto } from './tutorial/DogPhoto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Apollo tuts.</h1>
        </header>
        {/* <ExchangeRates /> */}
        <DogSelect />
        <DogPhoto />
      </div>
    );
  }
}

export default App;
