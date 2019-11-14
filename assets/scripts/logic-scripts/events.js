'use strict'
// HANDLES EVENTS

// const api = require('./api')
// const store = require('../store.js')
const ui = require('./ui')
let currentPlayer = true

const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(event.target)
    $(ui.playerMoveSuccess)
    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').addClass('x').text('x').addClass('taken')
      currentPlayer = !currentPlayer
    } else {
      $(event.target).css('background-color', 'blue').addClass('o').text('o').addClass('taken')
      currentPlayer = !currentPlayer
    }
  } else {
    $(ui.playerMoveFailure)
  }
}

// player switch functionality

// var flag = false;
// function flip(){
//   flag = !flag;
//   return flag;
// }

// to steamline the module.exports
const addHandlers = event => {
  $('.col-4').on('click', onPlayerMove)
}

module.exports = {
  addHandlers
}
