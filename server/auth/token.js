const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const Users = require('../../models/users')

function createToken (user, secret) {
  return jwt.sign({
    id: user._id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

function issue (req, res) {
  Users.find({username: req.body.username})
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
    .catch(err => {
      return res.status(403).json({
        message: 'Authentication failed.',
        info: err.message
      })
    })
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = {
  createToken,
  decode,
  issue
}
