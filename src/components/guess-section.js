import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';


export default function GuessSection(props) {
/*
  props:
    - response={props.response}
    - currentGuess={guess => props.dispatch(actions.currentGuess(guess))}
*/
    
  return (
    <section>
      <h2 id="feedback">{props.response}</h2>

      <GuessForm 
        currentGuess2={ guess => props.currentGuess(guess)}
      />

    </section>
  );
}

