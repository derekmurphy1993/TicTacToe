'use strict'
// Updates the UI
// const store = require('../store.js')

// GAME LOGIC
const playerMoveSuccess = move => {
  $('#feedback').text('You claimed the square!')
  // the index and its value gets passed to the stored data
}

const playerMoveFailure = move => {
  $('#feedback').text('Space Taken, try again.')
}

module.exports = {
  playerMoveSuccess,
  playerMoveFailure
}
