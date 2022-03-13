// package: express
const express = require("express")
const router = express.Router()
// middleware: auth
const {
  verifyAccess
} = require("../middlewares/midware_auth")
// controller: order
const {
  createOrder,
  readAllOrder
} = require("../controllers/controller_order")

router
  .post("/", verifyAccess, createOrder)
  .get("/", verifyAccess, readAllOrder)
module.exports = router
