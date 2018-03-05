import React /*, {Component}*/ from 'react';
import { connect } from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
// import InfoModal from './info-modal';
import * as actions from '../actions';


export function Game(props) {

  // constructor() {
  //   super();
  //   this.state= {
  //     answer: Math.floor(Math.random() * Math.floor(100)),
  //     guess: '',
  //     guessList: [],
  //     response: 'Make your guess!',
  //     instructions: false
  //   }
  // }

  // currentGuess(guess) {
  //     let distance= Math.abs(this.state.answer - guess);

  //     let response;
  //     if (distance > 30) {
  //       response = 'You\'re freezing!'
  //     } else if (distance <= 30 && distance > 15) {
  //       response = 'You\'re cold.'
  //     } else if (distance <= 15 && distance > 5) {
  //       response = 'You\'re warm.'
  //     } else if (distance <= 5 && distance > 1) {
  //       response = 'You\'re hot!'
  //     } else {
  //       response = 'That\'s the right answer!'
  //     }

  //     this.setState({ guess, response })
  // }

  // updateGuessList(guessList) {
  //     this.setState({ 
  //       guessList: [...this.state.guessList, guessList]} 
  //     )
  // }

  // restartGame(){
  //     this.setState({
  //       answer: Math.floor(Math.random() * Math.floor(100)),
  //       guess: '',
  //       guessList: [],
  //       response: 'Make your guess!'
  //     })
  // }



// =====================================================
  /* 
  receives props obj from the mapStateToProps const && connect func
    props = {
      dispatch: () => {}
      answer: '',
      guessList: [],
      response: 'Make your guess!'
    } 
*/

  function noInstructions() {
    this.setState({
      instructions: true
    })
  }

  // function showGame() {
  //   this.setState({
  //     instructions: false
  //   })
  // }


 console.log('answer: ',props.answer);
 console.log('guess: ', props.guessList)

    // if(this.state.instructions) {
    //   return <InfoModal showGame={() => showGame()}/>
    // }

    return (
      <div>
        {/* <Header 
          restart={() => this.restartGame()}
          noInstructions={() => noInstructions()} 
        /> */}

        <GuessSection
          response={props.response}
          currentGuess={guess => props.dispatch(actions.currentGuess(guess))}
        />

        <GuessCount 
          count={props.guessList.length}
        />

        {/* <GuessList 
          guesses={() => {}} 
        /> */}

      </div>
    );

}

const mapStateToProps = (state) => ({
  // receives initialState obj from the reducer
  answer: state.answer,
  guessList: state.guessList,
  response: state.response
})

// function mapStateToProps(state) {
//   console.log('state: ', state);
// }

export default connect(mapStateToProps)(Game);

