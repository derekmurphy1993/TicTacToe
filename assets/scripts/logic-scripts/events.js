'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const apiScript = require('../api-scripts/api')

let currentPlayer = true
let counter = 0

const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(ui.playerMoveSuccess)
    const currentBoxId = $(event.target).attr('id')
    counter++
    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').text('x').addClass('taken')
      $('#playerIcon').css('background-color', 'blue')
      $('#feedback').text(`It's now Player O's turn.`)
      apiScript.updateGame(currentBoxId, 'x')
      updateGameBoard(currentBoxId, 'x')
    } else {
      $(event.target).css('background-color', 'blue').text('o').addClass('taken')
      $('#playerIcon').css('background-color', 'red')
      $('#feedback').text(`It's now Player X's turn.`)
      apiScript.updateGame(currentBoxId, 'o')
      updateGameBoard(currentBoxId, 'o')
    }
    // attempting to retreive specific cell data from API
    // console.log(apiScript.thisGame.cells(console.log))
    checkWin()
    currentPlayer = !currentPlayer
  } else {
    $(ui.playerMoveFailure)
  }
}

// gameboard

const gameBoard = ['', '', '', '', '', '', '', '', '']

const updateGameBoard = (currentIndex, value) => {
  gameBoard.splice(currentIndex, 1, value)
  console.log(gameBoard)
}

// win conditions
const checkWin = () => {
  if (
    (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
    (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
    (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
    (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
    (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') ||
    (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
    (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
    (gameBoard[6] === 'x' && gameBoard[4] === 'x' && gameBoard[2] === 'x')) {
    $('#feedback').text(`Game Over! Player X wins!`)
    console.log('Player X wins')
  } else if (
    (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[4] === 'o' && gameBoard[2] === 'o')) {
    console.log('Player 0 wins')
  } else if (counter < 9) {
    console.log('keep playing')
  } else {
    console.log('its a tie')
  }
}

// to steamline the module.exports
const addHandlers = event => {
  $('.box').on('click', onPlayerMove)
}

module.exports = {
  addHandlers
}
