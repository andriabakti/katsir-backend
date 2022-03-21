// package: express
const { Router } = require("express")
// controller: user
const {
  signUp,
  signIn
} = require("../controllers/controller_user")

// usage: express-router
const router = Router()

router
  .post("/register", signUp)
  .post("/login", signIn)
module.exports = router
