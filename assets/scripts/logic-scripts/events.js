'use strict'
// HANDLES EVENTS

// const store = require('../store.js')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
let currentPlayer = true

// API SIGN IN
const onSignUp = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const formData = getFormFields(form) // get that form and run it

  api.signUp(formData)
    .then(ui.onSignupSuccess)
    .catch(ui.onSignupFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSigninSuccess)
    .catch(ui.onSigninFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // leaving out form data bc we arnt submiting data
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// GAME LOGIC
const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile
  if (!($(event.target).hasClass('taken'))) {
    $(ui.playerMoveSuccess)
    if (currentPlayer === true) {
      $(event.target).css('background-color', 'red').text('x').addClass('taken')
      $('#playerIcon').css('background-color', 'blue')
      $('#feedback').text(`It's now Player O's turn.`)
    } else {
      $(event.target).css('background-color', 'blue').text('o').addClass('taken')
      $('#playerIcon').css('background-color', 'red')
      $('#feedback').text(`It's now Player X's turn.`)
    }
    console.log($(event.target).index())
    currentPlayer = !currentPlayer
  } else {
    $(ui.playerMoveFailure)
  }
}

// gameboard

const gameBoard = ['', '', '', '', '', '', '', '', '']

// to steamline the module.exports
const addHandlers = event => {
  $('.col-4').on('click', onPlayerMove)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
