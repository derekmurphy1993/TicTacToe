'use strict'
// Updates the UI

const playerMoveSuccess = move => {
  // Duplicated in events.js for now
  // $(event.target).css('background-color', 'red').addClass('x').text('x')
  $('#message').text('You claimed the square!')
}

const playerMoveFailure = move => {
  $('#message').text('Space Taken, try again.')
  // Duplicated in events.js for now
  // $(event.target).css('background-color', 'red').addClass('x').text('x')
}

module.exports = {
  playerMoveSuccess,
  playerMoveFailure
}
