import React, { Component } from 'react';
import './App.css';
import { Note } from './Note/Note';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      notes: [
        {id: 1, noteContent: "Note1"},
        {id: 2, noteContent: "Note2"},
        {id: 3, noteContent: "Note3"}
      ]
    };
  }

  render() {
    return (
      <div className="note-wrapper">
        <h1>Firebase & React To-do list</h1>
        <div className="notes">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
              );
            })
          }

        </div>
      </div>
    );
  }
}

export default App;
