import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default class Game extends Component {

  constructor() {
    super();
    this.state= {
      guess: '',
      guessList: [],
      responses:[]
    }
  }

  currentGuess(guess) {
    this.setState({ guess })
  }

  updateGuessList(guessList) {

    this.setState({ 
      guessList: [...this.state.guessList, guessList]} 
    )
  }


  render() {
    return (
      <div>
        <Header />

        <GuessSection 
          feedback="Make your guess!" 
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

