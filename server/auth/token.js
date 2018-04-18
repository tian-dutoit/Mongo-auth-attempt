const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

function createToken (user, secret) {
  return jwt.sign({
    id: user._id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
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
  decode
}
