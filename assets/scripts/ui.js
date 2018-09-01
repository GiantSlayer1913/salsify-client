'use strict'
const store = require('./store')
// const events = require('./events')

// Sign-up
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
  $('#sign-up').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

// Sign-in
const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#change-password').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('#sign-up').css('display', 'none')
  $('#sign-up').trigger('reset')
  $('#sign-in').css('display', 'none')
  $('#sign-in').trigger('reset')
  $('#home').hide()
  $('.slideshow-container').css('display', 'block')
  $('#first').css('display', 'block')
  $('#next').show()
  $('#prev').show()
  $('.dots').show()
  $('#create-comment').css('display', 'block')
  $('#get-comments').css('display', 'block')
  $('#hide-comments').css('display', 'inline-flex')
  $('#update-comment').css('display', 'block')
  $('#destroy-comment').css('display', 'block')
  $('.dots').css('display', 'block')
  $('#sign-in').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
  $('#sign-in').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

// Change-password
const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const changePasswordFailure = function () {
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password').trigger('reset')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}

// Sign-out
const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  store.user = null
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
  setTimeout(() => {
    $('#message').html('')
  }, 3000
  )
}
// End of AUTH UI

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
