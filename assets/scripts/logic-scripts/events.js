'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const apiScript = require('../api-scripts/ui')
let currentPlayer = true

const onPlayerMove = event => {
// if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(ui.playerMoveSuccess)
    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').text('x').addClass('taken')
      $('#playerIcon').css('background-color', 'blue')
      $('#feedback').text(`It's now Player O's turn.`)
      apiScript.updateGame()
    } else {
      $(event.target).css('background-color', 'blue').text('o').addClass('taken')
      $('#playerIcon').css('background-color', 'red')
      $('#feedback').text(`It's now Player X's turn.`)
    }
    console.log($(event.target).attr('ID'))
    currentPlayer = !currentPlayer
  } else {
    $(ui.playerMoveFailure)
  }
}

// to steamline the module.exports
const addHandlers = event => {
  $('.col-4').on('click', onPlayerMove)
}

module.exports = {
  addHandlers
}
