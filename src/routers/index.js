// package: express
const { Router } = require("express")
// router: module
const routesUser = require("./router_user")
const routesProduct = require("./router_product")
const routesCategory = require("./router_category")
const routesOrder = require("./router_order")

// usage: express-router
const router = Router()

router
  .use("/user", routesUser)
  .use("/product", routesProduct)
  .use("/category", routesCategory)
  .use("/order", routesOrder)
module.exports = router
