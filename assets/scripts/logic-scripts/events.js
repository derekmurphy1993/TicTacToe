'use strict'
// HANDLES EVENTS

// const api = require('./api')
// const store = require('../store.js')
const ui = require('./ui')

const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(event.target)
    $(ui.playerMoveSuccess)
    $(event.target).css('background-color', 'red').addClass('x').text('x').addClass('taken')
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
