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

    currentGuess(e) {
        console.log('made it to guess!')
        // console.log(e);
        this.setState({guess:e})
    }

    updateGuessList() {
        console.log('made it to ugn')

        // this.setState({
        //     guessList: this.state.guessList.concat(this.state.guess)})
        // this.updateGuessNumber();
        console.log('guessList:', this.state.guessList);

        this.setState({ 
            guessList: [...this.state.guessList, this.state.guess], 
            guessNumber: this.state.guessList.length }
        )

        // console.log('concat',this.state.guessList.concat(this.state.guess))
        console.log('guess:', this.state.guess);
        console.log('guessList:',this.state.guessList);
        console.log('guessList.length:',this.state.guessList.length);
        // this.setState({ guessNumber: this.state.guessNumber + 1 })
    }

    // updateGuessNumber() {
    //     this.setState({ guessNumber: this.state.guessList.length})
    // }


    render() {
        return (
            <div>
                <Header />

                <GuessSection feedback="Make your guess!" 
                currentGuess={e => this.currentGuess(e.target.value)}
                updateGuessList={() => this.updateGuessList()} />

                <GuessCount count={this.state.guessNumber}/>

                <GuessList guesses={this.state.guessList} />
            </div>
        );
    }
}

