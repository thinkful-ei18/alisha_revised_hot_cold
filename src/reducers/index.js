/**
 * reducers
 */
import * as actions from '../actions';

const initialState = {
  answer: Math.floor(Math.random() * Math.floor(100)),
  guessList: [],
  response: 'Make your guess!',
  instructions: false
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
    } else if (distance <= 5 && distance >= 1) {
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
      response,
      instructions: false
    }
  }


  if (action.type === actions.NEW_GAME) {
    return {
      answer: Math.floor(Math.random() * Math.floor(100)),
      guessList: [],
      response: 'Make your guess!',
      instructions: false
    }
  }

  if (action.type === actions.SHOW_INSTRUCTIONS) {
    return {
      ...state,
      instructions: true
    }
  }

  if (action.type === actions.HIDE_INSTRUCTIONS) {
    return {
      ...state,
      instructions: false
    }
  }

  return state;

}