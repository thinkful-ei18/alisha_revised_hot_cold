import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    /*
    props:
        -currentGuess2={e => props.currentGuess(e)}
        -count2={() => this.updateGuessNumber()}
    */
    return (
        <form>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                onChange={e => props.currentGuess2(e)}/>
                
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
            onClick={e => {
                e.preventDefault();
                props.count2();
                }}/>
        </form>
    );
};

