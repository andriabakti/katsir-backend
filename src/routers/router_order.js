// package: express
const { Router } = require("express")
// middleware: auth
const { verifyAccess } = require("../middlewares/midware_auth")
// controller: order
const {
  createOrder,
  readAllOrder
} = require("../controllers/controller_order")

// usage: express-router
const router = Router()

router
  .post("/", verifyAccess, createOrder)
  .get("/", verifyAccess, readAllOrder)
module.exports = router
