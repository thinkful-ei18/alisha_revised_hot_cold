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
            guessNumber: 0,
            responses:[]
        }
    }

    guess(e) {
        // console.log(e);
        this.setState({guess:e})
    }

    updateGuessNumber() {
        this.setState({guessNumber: this.state.guessList.length})

        this.setState({guessList: this.state.guessList.concat(this.state.guess)})
    }


    render() {
        return (
            <div>
                <Header />

                <GuessSection feedback="Make your guess!" 
                currentGuess={e => this.guess(e.target.value)}
                count={() => this.updateGuessNumber()} />

                <GuessCount count={this.state.guessNumber}/>

                <GuessList guesses={this.state.guessList} />
            </div>
        );
    }
}

