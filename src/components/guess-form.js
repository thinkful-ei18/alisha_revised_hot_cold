import React, {Component} from 'react';

import './guess-form.css';

export default class GuessForm extends Component {
    /*
    props:
        -currentGuess2={e => props.currentGuess(e)}
        -updateGuessList2={() => props.updateGuessList()}
    */

   render() {

       return (
           <form onSubmit={(e) => { 
               e.preventDefault(); 
               console.log(this.inputBox.value);
               this.props.currentGuess2(this.inputBox.value); 
               this.props.updateGuessList2(this.inputBox.value);
               this.inputBox.value = '';
               }}>
               <input type="text" name="userGuess" id="userGuess"
                   className="text" maxLength="3" autoComplete="off"
                   placeholder="Enter your Guess" required 
                   ref={(input) => this.inputBox = input} />
                   {/* onChange={e => this.props.currentGuess2(e)} */}
                   {/* onSubmit={e => e.target.value('')}/> */}
                   
               <input type="submit" id="guessButton" className="button" name="submit" value="Guess"
               
                   />
           </form>
       );
   }
};

