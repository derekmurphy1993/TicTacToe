'use strict'
// Updates the UI
const store = require('../store.js')

// GAME LOGIC
const playerMoveSuccess = move => {
  $('#feedback').text('You claimed the square!')
}

const playerMoveFailure = move => {
  $('#feedback').text('Space Taken, try again.')
}

// AUTHENTICATION
const onSuccess = message => {
  $('#message').removeClass('failure').addClass('success').text(message)
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message').removeClass('success').addClass('failure').text(message)
  $('form').trigger('reset')
}

const onSignupSuccess = () => {
  onSuccess('Your Sign In Was Successful')
}

const onSignupFailure = () => {
  onFailure('Something went wrong')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user // store the user data in store.js
  console.log(store)
  onSuccess('Your Sign In Was Successful')
  $('.after-auth').show()
  $('.before-auth').hide()
  $('.game').show()
}

const onSigninFailure = () => {
  onFailure('Username and Password Doesnt Match')
}

const onChangePasswordSuccess = () => {
  onSuccess('You changed your password')
}

const onChangePasswordFailure = () => {
  onFailure('Oh no.')
}

const onSignOutSuccess = () => {
  store.user = {}
  onSuccess('Successfully Signed Out')
  $('.after-auth').hide()
  $('.before-auth').show()
  $('.game').hide()
}

const onSignOutFailure = () => {
  onFailure('Error, still logged in')
}

module.exports = {
  playerMoveSuccess,
  playerMoveFailure,
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
