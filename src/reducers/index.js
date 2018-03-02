import * as actions from '../actions';

const initialState = {
  answer: Math.floor(Math.random() * Math.floor(100)),
  guess: '',
  guessList: [],
  response: 'Make your guess!',
  instructions: false
}

