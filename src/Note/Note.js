import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

export class Note extends Component {
  constructor(props){
    super(props);
    this.noteContent = props.noteContent;
    this.noteId = props.noteId;

  }

  render(props) {
    return(
      <div className="note">
       <p className="note-content">{this.noteContent}</p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
};
