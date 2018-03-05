import React, {Component} from 'react';

import './guess-form.css';


export default class GuessForm extends Component {
    /*
    props:
        - currentGuess2={guess => props.currentGuess(guess)}
        - updateGuessList2={ guessList => props.updateGuessList(guessList)}
    */

  render() {

    return (
      <form 
        onSubmit={(e) => { 
        e.preventDefault(); 
        this.props.currentGuess2(e.target.value); 
        {/* this.props.updateGuessList2(this.inputBox.value); */}
        this.inputBox.value = '';
        }}>

        <input 
          type="text" 
          name="userGuess" 
          id="userGuess"
          className="text" 
          maxLength="3" 
          autoComplete="off"
          placeholder="Enter your Guess" 
          required 
          ref={(input) => this.inputBox = input} 
        />
                
        <input 
          type="submit" 
          id="guessButton" 
          className="button" 
          name="submit" 
          value="Guess"
        />

      </form>
    );
  }
};

