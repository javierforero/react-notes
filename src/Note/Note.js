import React, {Component} from 'react';
import './Note.css';
import PropTypes from 'prop-types';

export class Note extends Component {
  constructor(props){
    super(props);
    this.message = "hello from the note Component";
  }

  render(props) {
    return(
      <div>
       <h1>{this.message}</h1>
      </div>
    );
  }
}
