'use strict'
// Updates the UI
// const store = require('../store.js')

// GAME LOGIC
const playerMoveSuccess = move => {
  $('#feedback').text('You claimed the square!')
}

const playerMoveFailure = move => {
  $('#feedback').text('Space Taken, try again.')
}

module.exports = {
  playerMoveSuccess,
  playerMoveFailure
}
