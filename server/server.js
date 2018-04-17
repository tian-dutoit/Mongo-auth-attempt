const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const _ = require('lodash')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

let Posts = require('../models/posts')

mongoose.connect('mongodb://localhost/lightning')
let db = mongoose.connection

// Check connection
db.once('open', () => {
  console.log('Connected to lightning db')
})

// Check for db errors
db.on('error', (err) => {
  console.log(err)
})

server.get('/api/v1/posts', (req, res) => {
  Posts.find({}, (err, posts) => {
    if (err) {
      throw err
    } else {
      let sorted = _.sortBy(posts, [function (o) { return o.votes }]).reverse()
      res.send(sorted)
    }
  })
})

server.post('/api/v1/posts', (req, res) => {
  let post = new Posts()
  post.title = req.body.title
  post.description = req.body.description
  post.username = req.body.username
  post.votes = 0
  post.save((err) => {
    if (err) {
      throw err
    } else {
      res.send(post)
    }
  })
})

server.post('/api/v1/vote', (req, res) => {
  Posts.findById(req.body[0], (err, post) => {
    if (err) {
      return res.status(500).send('Like was not added')
    } else {
      post.votes += 1
      post.save((err) => {
        if (err) {
          throw err
        } else {
          res.send({})
        }
      })
    }
  })
})

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
module.exports = server
