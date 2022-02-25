const { verify } = require('jsonwebtoken')
const { response } = require('../helpers/helper_resp')

module.exports = {
  verifyAccess: (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]
    verify(token, process.env.SECRET_KEY, (err, _decoded) => {
      const message = 'Token is invalid'
      if (err) {
        return response(res, [], 403, message, null, err)
      }
      next()
    })
  }
}
