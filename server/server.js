const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const server = express()

let Test = require('../models/test')
let Posts = require('../models/posts')

mongoose.connect('mongodb://localhost/lightning')
let db = mongoose.connection

// Check connection
db.once('open', () => {
  console.log('Connected to lightning db')
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

server.get('/api/v1/posts', (req, res) => {
  Posts.find({}, (err, posts) => {
    if (err) {
      throw err
    } else {
      res.send(posts)
    }
  })
})

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
