const jwt = require('jsonwebtoken')

function createToken (user, secret) {
  return jwt.sign({
    id: user._id,
    username: user.username
  }, secret, {
    expiresIn: '1d'
  })
}

module.exports = {
  createToken
}
