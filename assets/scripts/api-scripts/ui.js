'use strict'
// Updates the UI
const store = require('../store.js')

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

const newGameSuccess = (gameData) => {
  store.game = gameData.game
  console.log(gameData)
}

const newGameFailure = () => {
  onFailure('something went wrong')
}

const updateSuccess = () => {
  console.log(store.game) // gameDate returns undefined
}

const updateFailure = () => {
  console.log('Game Failure', store.game)
}

module.exports = {

  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  newGameSuccess,
  newGameFailure,
  updateSuccess,
  updateFailure
}
