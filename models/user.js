var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please type your email']
  },
  username: {
    type: String,
    required: [true, 'Please type your username']
  },
  password: {
    type: String,
    required: [true, 'Please type your password'],
    minlength: [6, 'Password too short']
  }
})

var User = mongoose.model('User', userSchema)

module.exports = User
