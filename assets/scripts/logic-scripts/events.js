'use strict'
// HANDLES EVENTS

// const api = require('./api')
// const store = require('../store.js')
const ui = require('./ui')
let currentPlayer = true

const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile

  if (!($(event.target).hasClass('taken'))) {
    $(event.target).addClass('taken')
    $(ui.playerMoveSuccess)
    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').addClass('x').text('x')
      $('#playerIcon').css('background-color', 'blue').text(`Player O's turn!`)
    } else {
      $(event.target).css('background-color', 'blue').addClass('o').text('o')
      $('#playerIcon').css('background-color', 'red').text(`Player X's turn!`)
    }
    currentPlayer = !currentPlayer
  } else {
    $(ui.playerMoveFailure)
  }
}

// to steamline the module.exports
const addHandlers = event => {
  $('.box').on('click', onPlayerMove)
}

// is game over

module.exports = {
  addHandlers
}
