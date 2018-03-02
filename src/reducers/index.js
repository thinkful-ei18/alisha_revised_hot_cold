/**
 * reducers
 */
import * as actions from '../actions';

const initialState = {
  answer: '',
  guessList: [],
  response: 'Make your guess!',
  // instructions: false
}


export const gameReducer = (state=initialState, action) => {

  if (action.type === actions.CURRENT_GUESS) {
    let distance = Math.abs(state.answer - action.guess);

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
    
    return {
      ...state,
      guessList: [
        ...state.guessList, 
        action.guess
        ],
      response
    }
  }


  if (action.type === actions.NEW_GAME) {
    return {
      ...state,
      answer: action.answer,
      guessList: [],
      response: 'Make your guess!'
    }
  }


  if (action.type === actions.CHANGE_INSTRUCTIONS) {
    return {
      ...state,
      answer: action.answer
    }
  }

}