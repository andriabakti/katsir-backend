// package: bcryptjs
const bcrypt = require('bcryptjs')
// package: jsonwebtoken
const jwt = require('jsonwebtoken')
// model: user
const {
  createUser,
  getUserByEmail
} = require('../models/model_user')
// helper: response
const {
  response
} = require('../helpers/helper_resp')

module.exports = {
  signUp: (req, res, next) => {
    const {
      email,
      password,
      username,
      role
    } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const data = {
      email,
      password: hash,
      username,
      role,
      created_at: new Date()
    }
    createUser(data)
      .then((result) => {
        response(res, result, 201, 'Register success', null, null)
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: 'Failed to register new user'
        })
      })
  },
  signIn: (req, res, next) => {
    const {
      email,
      password
    } = req.body
    getUserByEmail(email)
      .then((result) => {
        if (result.length < 1) {
          return next({ status: 404, message: 'User not found' })
        }
        const user = result[0]
        bcrypt.compare(password, user.password)
          .then((resCompare) => {
            !resCompare && next({ status: 404, message: 'Password is wrong' })
            const payload = {
              id: user.id,
              email: user.email,
              role: user.role
            }
            jwt.sign(
              payload,
              process.env.JWT_KEY, {
              expiresIn: '12h'
            },
              (_err, token) => {
                user.token = token
                delete user.password
                delete user.created_at
                delete user.updated_at
                response(res, result[0], res.statusCode, 'Login success', null, null
                )
              }
            )
          })
      })
      .catch((error) => {
        console.log(error)
        next({
          status: error.statusCode,
          message: 'Failed to login'
        })
      })
  }
}