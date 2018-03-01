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
        // console.log(e);
        this.setState({guess:e})
    }

    updateGuessList() {

        this.setState({
            guessList: [...this.state.guessList, this.state.guess],
            guessNumber: this.state.guessNumber + 1
        })

        // this.setState({ 
        //     guessList: [...this.state.guessList, this.state.guess], 
        //     guessNumber: this.state.guessList.length }
        // )

        // this.setState({ 
        //     guessList: [...this.state.guessList, this.state.guess], 
        //     guessNumber: this.state.guessList.concat(this.state.guess) })

        // console.log('guess:', this.state.guess);
        // console.log('guessList:',this.state.guessList);
        // console.log('guessList.length:',this.state.guessList.length);
    }


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

