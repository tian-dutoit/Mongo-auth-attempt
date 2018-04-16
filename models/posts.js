let mongoose = require('mongoose')

// Posts Schema

let postsSchema = mongoose.Schema({
  name: {
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
  }
})

let Posts = mongoose.model('Posts', postsSchema)

module.exports = Posts
