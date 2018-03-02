/**
 * reducers
 */
import * as actions from '../actions';

const initialState = {
  answer: Math.floor(Math.random() * Math.floor(100)),
  // guess: '',
  guessList: [],
  response: 'Make your guess!',
  instructions: false
}


export const gameReducer = (state=initialState, action) => {

  if (action.type === actions.CURRENT_GUESS) {
    return {
      ...state,
      guessList: [...state.guessList, action.guess]
    }
  }

  if (action.type === actions.NEW_GAME) {
    return {
      ...state,
      answer: action.answer
    }
  }



}