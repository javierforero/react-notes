import React, { Component } from 'react';
import './App.css';
import { Note } from './Note/Note';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Firebase & React To-do list</h1>
        <Note/>
      </div>
    );
  }
}

export default App;
