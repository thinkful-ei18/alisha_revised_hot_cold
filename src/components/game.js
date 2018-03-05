import React /*, {Component}*/ from 'react';
import { connect } from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';
import * as actions from '../actions';


export function Game(props) {
  /* 
  * receives props obj from the mapStateToProps const && connect func
  * props = {
    dispatch: () => {}
    answer: '',
    guessList: [],
    response: 'Make your guess!',
    instructions: false
  } 
*/

  // console.log('store', props)

  if(props.instructions) {
    return <InfoModal 
      hideInstructions={() => props.dispatch(actions.hideInstructions())}
    />
  }

  return (
    <div>

      <Header
        newGame={() => props.dispatch(actions.createNewGame())}
        showInstructions={() => props.dispatch(actions.showInstructions())}
      />

      <GuessSection
        response={props.response}
        currentGuess={guess => props.dispatch(actions.currentGuess(guess))}
      />

      <GuessCount 
        count={props.guessList.length}
      />

      <GuessList 
        guesses={props.guessList} 
      />

    </div>
  );

}

const mapStateToProps = (state) => ({
  // receives initialState obj from the reducer
  answer: state.answer,
  guessList: state.guessList,
  response: state.response,
  instructions: state.instructions
})

export default connect(mapStateToProps)(Game);

