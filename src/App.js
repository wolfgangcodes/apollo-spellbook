import React, { Component } from 'react';
import './App.css';
import { DogSelect } from './tutorial/DogSelect';
import { DogPhoto } from './tutorial/DogPhoto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Apollo tuts.</h1>
        </header>
        <DogSelect />
        <DogPhoto />
      </div>
    );
  }
}

export default App;
