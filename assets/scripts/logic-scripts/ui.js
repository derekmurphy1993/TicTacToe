'use strict'
// Updates the UI
// const store = require('../store.js')
const store = require('../store')

// GAME LOGIC
const playerMoveSuccess = (player) => {
  $('#feedback').text('You claimed the square! ' + player)
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
  onSuccess('Your Sign Up Was Successful, Please Sign In')
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
  $('.after-newgame').show()
  $('.before-newgame').hide()
  $('.after-game').hide()
  $('#playerIcon').css('background-color', 'red').text('X')
}

const newGameFailure = () => {
  onFailure('something went wrong')
}

const onGetGameSuccess = responseData => {
  const games = responseData.games.length
  $('#howManyGames').html(games)
}

const onGetGameFailure = responseData => {
}

const onGameOver = (overStatment) => {
  $('.over-statment').html('<h2>' + overStatment + '</h2>')
  $('.after-newgame').hide()
  $('.after-game').show()
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
  onGetGameFailure,
  onGameOver
}
