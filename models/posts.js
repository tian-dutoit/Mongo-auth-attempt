let mongoose = require('mongoose')

// Posts Schema

let postsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  votes: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})

let Posts = mongoose.model('Posts', postsSchema)

module.exports = Posts
