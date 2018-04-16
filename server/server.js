const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const server = express()

let Test = require('../models/test')

mongoose.connect('mongodb://localhost/testdb')
let db = mongoose.connection

// Check connection
db.once('open', () => {
  console.log('Connected to test db')
})

// Check for db errors
db.on('error', () => {
  console.log(err)
})

server.get('/api/v1/test', (req, res) => {
  Test.find({}, (err, test) => {
    if (err) {
      throw err
    } else {
      res.send(test)
    }
  })
})

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
