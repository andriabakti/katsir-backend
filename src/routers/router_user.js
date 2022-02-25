const { Router } = require('express')
const { signUp, signIn } = require('../controllers/controller_user')
const router = Router()

router
  .post('/register', signUp)
  .post('/login', signIn)
module.exports = router
