// package: express
const express = require("express")
const router = express.Router()
// router: module
const routesUser = require("./router_user")
const routesProduct = require("./router_product")
const routesCategory = require("./router_category")
const routesOrder = require("./router_order")

router
  .use("/user", routesUser)
  .use("/product", routesProduct)
  .use("/category", routesCategory)
  .use("/order", routesOrder)
module.exports = router
