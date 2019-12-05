'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

let gameOver = false
let currentPlayer = true
let counter = 0

const onPlayerMove = event => {
  // if target does not have the class "taken", add the class and claim the tile
  if (gameOver === false) {
    if (!($(event.target).hasClass('taken'))) {
      const currentBoxId = $(event.target).attr('id')
      counter++
      if (currentPlayer === true) {
        $(ui.playerMoveSuccess("It's now player O's turn"))
        $(event.target).css('background-color', 'red').text('x').addClass('taken')
        $('#playerIcon').css('background-color', 'blue').text('O')
        api.updateGame(currentBoxId, 'x')
        updateGameBoard(currentBoxId, 'x')
      } else {
        $(ui.playerMoveSuccess("It's now player X's turn"))
        $(event.target).css('background-color', 'blue').text('o').addClass('taken')
        $('#playerIcon').css('background-color', 'red').text('X')
        api.updateGame(currentBoxId, 'o')
        updateGameBoard(currentBoxId, 'o')
      }

      checkWin()
      currentPlayer = !currentPlayer
    } else {
      $(ui.playerMoveFailure)
    }
  }
}

// gameboard

let gameBoard = ['', '', '', '', '', '', '', '', '']

const updateGameBoard = (currentIndex, value) => {
  gameBoard.splice(currentIndex, 1, value)
}

// win conditions
// can probalby simplify this with a currentPlayer function to determin x or o in one call
const checkWin = () => {
  if (
    (gameBoard[0] === 'x' && gameBoard[1] === 'x' && gameBoard[2] === 'x') ||
    (gameBoard[0] === 'x' && gameBoard[3] === 'x' && gameBoard[6] === 'x') ||
    (gameBoard[0] === 'x' && gameBoard[4] === 'x' && gameBoard[8] === 'x') ||
    (gameBoard[1] === 'x' && gameBoard[4] === 'x' && gameBoard[7] === 'x') ||
    (gameBoard[2] === 'x' && gameBoard[5] === 'x' && gameBoard[8] === 'x') ||
    (gameBoard[3] === 'x' && gameBoard[4] === 'x' && gameBoard[5] === 'x') ||
    (gameBoard[6] === 'x' && gameBoard[7] === 'x' && gameBoard[8] === 'x') ||
    (gameBoard[6] === 'x' && gameBoard[4] === 'x' && gameBoard[2] === 'x')) {
    gameOver = true
    api.updateGameOver(gameOver)
    ui.onGameOver('Player X wins')
  } else if (
    (gameBoard[0] === 'o' && gameBoard[1] === 'o' && gameBoard[2] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[3] === 'o' && gameBoard[6] === 'o') ||
    (gameBoard[0] === 'o' && gameBoard[4] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[1] === 'o' && gameBoard[4] === 'o' && gameBoard[7] === 'o') ||
    (gameBoard[2] === 'o' && gameBoard[5] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[3] === 'o' && gameBoard[4] === 'o' && gameBoard[5] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[7] === 'o' && gameBoard[8] === 'o') ||
    (gameBoard[6] === 'o' && gameBoard[4] === 'o' && gameBoard[2] === 'o')) {
    gameOver = true
    api.updateGameOver(gameOver)
    ui.onGameOver('Player 0 wins')
  } else if (counter < 9) {
  } else {
    gameOver = true
    api.updateGameOver(gameOver)
    ui.onGameOver('Ended in a Tie')
  }
}

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
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').css('background-color', 'grey').text('click').removeClass('taken')
  counter = 0
  currentPlayer = true
  gameOver = false
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const updateGame = event => {
  event.preventDefault()
  api.updateGame()
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const getAllGames = event => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

// to steamline the module.exports
const addHandlers = event => {
  $('.box').on('click', onPlayerMove)
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('submit', newGame)
  $('#restart-game').on('submit', newGame)
  $('#update-game').on('submit', updateGame)
  $('#get-games').on('submit', getAllGames)
}

// is game over

module.exports = {
  addHandlers
}
