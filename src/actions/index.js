/*
* actions - are only the things that the user can change 
*/


export const CURRENT_GUESS = 'CURRENT_GUESS'
export const currentGuess= guess => ({
  type: CURRENT_GUESS,
  guess
})

export const CHANGE_INSTRUCTIONS = 'CHANGE_INSTRUCTIONS'
export const showInstructions = value => ({
  type: CHANGE_INSTRUCTIONS,
  value
})

export const NEW_GAME = 'NEW_GAME'
export const createNewGame = answer => ({
  type: NEW_GAME,
  answer
})


// export const GUESS_LIST = 'GUESS_LIST'
// export const updateGuessList = guessList => ({
//   type: GUESS_LIST,
//   guessList
// })

// export const ANSWER = 'ANSWER'
// export const correctAnswer = answer => ({
//   type: ANSWER,
//   answer
// })



// export const RESPONSE = 'RESPONSE'
// export const updateResponse = response => ({
//   type: RESPONSE,
//   response
// })
