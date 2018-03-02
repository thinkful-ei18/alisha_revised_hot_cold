/*
* actions - are only the things that the user can change 
*/


export const CURRENT_GUESS = 'CURRENT_GUESS'
export const currentGuess= guess => ({
  type: CURRENT_GUESS,
  guess
})

export const NEW_GAME = 'NEW_GAME'
export const createNewGame = answer => ({
  type: NEW_GAME,
  answer
})
