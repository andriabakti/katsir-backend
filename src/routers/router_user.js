// package: express
const express = require('express')
const router = express.Router()
// controller: user
const {
  signUp,
  signIn
} = require('../controllers/controller_user')

router
  .post('/register', signUp)
  .post('/login', signIn)
module.exports = router