import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';


export default function GuessSection(props) {
/*
  props:
    - response={this.state.response}
    - currentGuess={ guess => this.currentGuess(guess)}
    - updateGuessList={() => this.updateGuessList(guessList)}
*/
    
  return (
    <section>
      <h2 id="feedback">{props.response}</h2>

      <GuessForm 
        currentGuess2={ guess => props.currentGuess(guess)}
        updateGuessList2={ guessList => props.updateGuessList(guessList)}
      />

    </section>
  );
}

