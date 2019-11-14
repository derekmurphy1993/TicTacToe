'use strict'
// HANDLES EVENTS

// const api = require('./api')
// const store = require('../store.js')
const ui = require('./ui')
let currentPlayer = true

const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(ui.playerMoveSuccess)
    console.log(gameBoard)
    currentPlayer = !currentPlayer
    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').text('x').addClass('taken')
      $('#playerIcon').css('background-color', 'blue')
      $('#message').text(`It's now Player O's turn.`)
    } else {
      $(event.target).css('background-color', 'blue').text('o').addClass('taken')
      $('#playerIcon').css('background-color', 'red')
      $('#message').text(`It's now Player X's turn.`)
    }
  } else {
    $(ui.playerMoveFailure)
  }
}

// gameboard

const gameBoard = ['', '', '', '', '', '', '', '', '']

// to steamline the module.exports
const addHandlers = event => {
  $('.col-4').on('click', onPlayerMove)
}

module.exports = {
  addHandlers
}
