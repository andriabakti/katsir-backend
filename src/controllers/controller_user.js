const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { createUser, getUserByEmail } = require('../models/model_user')
const { response } = require('../helpers/helper_resp')

module.exports = {
  signUp: (req, res) => {
    const { email, password, username } = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const data = {
      email,
      password: hash,
      username,
      role: 2,
      createdAt: new Date()
    }
    createUser(data)
      .then((result) => {
        response(res, result, 201, 'Register success', null, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  signIn: (req, res) => {
    const { email, password } = req.body
    getUserByEmail(email)
      .then((result) => {
        if (result.length < 1) {
          return response(res, [], 404, 'Email not found !!', null, null)
        }
        const user = result[0]
        bcrypt.compare(password, user.password).then((resCompare) => {
          !resCompare && response(res, [], 404, 'Password is wrong', null, null)
          const payload = {
            id: user.id,
            email: user.email,
            role: user.role
          }
          jwt.sign(
            payload,
            process.env.JWT_KEY,
            { expiresIn: '12h' },
            (_err, token) => {
              user.token = token
              delete user.password
              delete user.createdAt
              delete user.updatedAt
              response(
                res,
                result[0],
                res.statusCode,
                'Login success',
                null,
                null
              )
            }
          )
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
