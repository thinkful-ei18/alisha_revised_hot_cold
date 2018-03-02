import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default class Game extends Component {

  constructor() {
    super();
    this.state= {
      answer: Math.floor(Math.random() * Math.floor(100)),
      guess: '',
      guessList: [],
      response: 'Make your guess!'
    }
  }

  currentGuess(guess) {
      let distance= Math.abs(this.state.answer - guess);

      let response;
      if (distance > 30) {
        response = 'You\'re freezing!'
      } else if (distance <= 30 && distance > 15) {
        response = 'You\'re cold.'
      } else if (distance <= 15 && distance > 5) {
        response = 'You\'re warm.'
      } else if (distance <= 5 && distance > 1) {
        response = 'You\'re hot!'
      } else {
        response = 'That\'s the right answer!'
      }

      this.setState({ guess, response })
  }

  updateGuessList(guessList) {
      this.setState({ 
        guessList: [...this.state.guessList, guessList]} 
      )
  }

  restartGame(){
      this.setState({
        answer: Math.floor(Math.random() * Math.floor(100)),
        guess: '',
        guessList: [],
        response: 'Make your guess!'
      })
  }


  render() {
    return (
      <div>
        <Header 
          restart={() => this.restartGame()} 
        />

        <GuessSection 
          response={this.state.response}
          currentGuess={ guess => this.currentGuess(guess)}
          updateGuessList={ guessList => this.updateGuessList(guessList)}
        />

        <GuessCount 
          count={this.state.guessList.length}
        />

        <GuessList 
          guesses={this.state.guessList} 
        />

      </div>
    );
  }
}

