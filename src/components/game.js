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
            guessNumber:'',
            responses:[]
        }
    }

    guess(e) {
        // console.log(e);
        this.setState({guess:e})
    }

    render() {
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" currentGuess={e => this.guess(e.target.value)}/>
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

