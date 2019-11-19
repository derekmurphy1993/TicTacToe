'use strict'
// Updates the UI
// const store = require('../store.js')
const store = require('../store')
const events = require('./events')

// GAME LOGIC
const playerMoveSuccess = move => {
  $('#feedback').text('You claimed the square!')
  // the index and its value gets passed to the stored data
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
  onSuccess('Your Sign In Was Successful')
  $('.after-auth').show()
  $('.before-newgame').show()
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
  $('.before-newgame').hide()
  $('.after-newgame').hide()
  $('.before-auth').show()
}

const onSignOutFailure = () => {
  onFailure('Error, still logged in')
}

const newGameSuccess = (gameData) => {
  store.game = gameData.game
  console.log(gameData)
  $('.after-newgame').show()
  // $('.before-newgame').hide()
}

const newGameFailure = () => {
  onFailure('something went wrong')
}

const onGetGameSuccess = responseData => {
  const games = responseData.games.length
  $('#howManyGames').html(games)
  console.log(games)
}

const onGetGameFailure = responseData => {
  console.log('Error: Games Not Found.')
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
  onSignOutFailure,
  newGameSuccess,
  newGameFailure,
  onGetGameSuccess,
  onGetGameFailure
}
