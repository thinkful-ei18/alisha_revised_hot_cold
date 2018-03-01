import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
/*
  props:
    -feedback="Make your guess!"
    -currentGuess={e => this.guess(e.target.value)}
*/
    
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm currentGuess2={e => props.currentGuess(e)}/>
        </section>
    );
}

