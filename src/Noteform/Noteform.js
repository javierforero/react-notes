import React, { Component } from 'react';
import './Noteform.css';

class Noteform extends Component{
  constructor(props) {
    super(props);
    this.state = {
      newNoteContent: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }
  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value //setting to user input
    })
  }

  writeNote(){
   // update array
   this.props.addNote(this.state.newNoteContent);
   //clear note content
   this.setState({
     newNoteContent: ''
   })

  }
  render() {
    return (
      <div className="input-form-wrapper">
        <input className="input-form"
        placeholder="Write a new note"
        value={this.state.newNoteContent}
        onChange={this.handleUserInput}
        />
        <button className="noteButton"
        onClick = {this.writeNote}
        >Add Note</button>
      </div>
    );
  }
}

export default Noteform;
