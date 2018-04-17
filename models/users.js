let mongoose = require('mongoose')

// Users Schema

let usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

let Users = mongoose.model('Users', usersSchema)

module.exports = Users
