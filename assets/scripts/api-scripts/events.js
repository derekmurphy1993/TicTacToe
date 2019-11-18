'use strict'
// HANDLES EVENTS
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

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
const newGame = event => {
  event.preventDefault()
  console.log()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const updateGame = event => {
  event.preventDefault()
  console.log()
  api.updateGame()
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

// to steamline the module.exports
const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('submit', newGame)
  $('#update-game').on('submit', updateGame)
}

module.exports = {
  addHandlers
}
