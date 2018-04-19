const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const _ = require('lodash')

const server = express()

const hash = require('./auth/hash')
const auth = require('./auth/token')
let Posts = require('../models/posts')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

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

server.post('/api/v1/posts', auth.decode, (req, res) => {
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

server.post('/api/v1/vote', auth.decode, (req, res) => {
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

let Users = require('../models/users')

server.post('/api/v1/register', register)

function register (req, res) {
  Users.find({username: req.body.username}, (err, oldUser) => {
    if (oldUser.length > 0) {
      return res.json({
        message: 'That username is unavailable.'
      })
    } else if (err) {
      return res.json({
        message: 'An unexpected error has occured'
      })
    } else {
      const passwordHash = hash.generate(req.body.password)
      let user = new Users()
      user.username = req.body.username
      user.password = passwordHash
      user.save((err) => {
        if (err) {
          throw err
        } else {
          const token = auth.createToken(user, process.env.JWT_SECRET)
          res.json({
            message: 'Authentication successful.',
            token
          })
        }
      })
    }
  })
}

server.post('/api/v1/login', (req, res) => {
  Users.find({username: req.body.username}, (err, user) => {
    if (!hash.verifyUser(user[0].password, req.body.password)) {
      res.json({
        message: 'Incorrect user name or password.'
      })
    } else if (err) {
      res.json({
        message: 'An unexpected error has occured'
      })
    } else {
      const token = auth.createToken(user[0], process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    }
  })
})

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
