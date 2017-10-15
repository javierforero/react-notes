import React, { Component } from 'react';
import  Note from './Note/Note';
import Noteform from './Noteform/Noteform';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';
class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: []
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      })
      
      this.setState({
        notes: previousNotes
      });
    });
  }

  addNote(note){
    this.database.push().set({noteContent: note});
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
              )
            })
          }
        </div>
        <Noteform addNote={this.addNote}/>
      </div>
    );
  }
}

export default App;
