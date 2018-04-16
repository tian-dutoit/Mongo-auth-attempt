let mongoose = require('mongoose')

// Test Schema

let testSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

let collectionName = 'staff'

let Test = mongoose.model('Staff', testSchema, collectionName)

module.exports = Test
