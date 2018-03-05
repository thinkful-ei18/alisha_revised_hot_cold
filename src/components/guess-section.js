import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';


export default function GuessSection(props) {
/*
  props:
    - response={this.state.response}
    - currentGuess={ guess => this.currentGuess(guess)}
    - updateGuessList={() => this.updateGuessList(guessList)}

    - onChange={e => props.dispatch(actions.currentGuess(e.target.value))}
*/
    
  return (
    <section>
      <h2 id="feedback">{props.response}</h2>

      <GuessForm 
        currentGuess2={ guess => props.currentGuess(guess)}
        
      />

      {/* <GuessForm
        updateGuessList={props.onChange()}
      /> */}

    </section>
  );
}

