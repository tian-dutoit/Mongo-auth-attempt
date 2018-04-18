const express = require('express')

const router = express.Router()
let Users = require('../models/users')

router.post('/register', register)

function register (req, res) {
  // console.log(req.body)
  let user = new Users()
  user.username = req.body.username
  user.password = req.body.password
  user.save((err) => {
    if (err) {
      throw err
    } else {
      res.send(user)
    }
  })
}
// TODO: make sure username doesn't already exist
// TODO: if not, hash the password and add the user to the database

module.exports = router
