'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const apiScript = require('../api-scripts/api')
let currentPlayer = true

const onPlayerMove = event => {
// if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(ui.playerMoveSuccess)

    // HOW DO I FIND THE CURRENT SQUARES INDEX??
    console.log($('#div.box').index())

    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').text('x').addClass('taken')
      $('#playerIcon').css('background-color', 'blue')
      $('#feedback').text(`It's now Player O's turn.`)
      apiScript.updateGame(2, 'x')
    } else {
      $(event.target).css('background-color', 'blue').text('o').addClass('taken')
      $('#playerIcon').css('background-color', 'red')
      $('#feedback').text(`It's now Player X's turn.`)
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

module.exports = {
  addHandlers
}
