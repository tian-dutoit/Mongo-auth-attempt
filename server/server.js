const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const _ = require('lodash')

const server = express()

const hash = require('./auth/hash')
const auth = require('./auth/token')
let Posts = require('../models/posts')
let Users = require('../models/users')

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

server.post('/api/v1/register', register, auth.issue)

function register (req, res, next) {
  Users.find({username: req.body.username})
    .then(oldUser => {
      if (oldUser.length >= 1) {
        return res.status(400).send({
          errorType: 'USERNAME_UNAVAILABLE'
        })
      }
      let user = new Users()
      user.username = req.body.username
      user.password = hash.generate(req.body.password)
      user.save((err) => {
        if (err) {
          throw err
        } else {
          next()
        }
      })
    })

    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

server.post('/api/v1/login', login, auth.issue)

function login (req, res, next) {
  Users.find({username: req.body.username})
    .then(user => {
      return user[0] || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verifyUser(user.password, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })

    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

// Default route for non-API requests
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
